import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';

function QuestionBox(props) {
  let questions = require('../data/data.json');

  const [questionCount, SetQuestionCount] = useState(0);
  const [SelectedValue, SetSelectedValue] = useState('');
  const [QuizScore, SetQuizScore] = useState(0);

  AsyncStorage.setItem('NoOfQuestions', questions.length.toString());

  const [username, setUsername] = useState('');

  let next = () => {
    if (SelectedValue === questions[questionCount].answer) {
      SetQuizScore(10 + QuizScore);
    }
    AsyncStorage.setItem('QuizScore', QuizScore.toString());
    if (questionCount === questions.length - 1) {
      props.navigator.navigate('Result');
    } else {
      SetQuestionCount(questionCount + 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
          // We have data!!
          setUsername(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    getData();
  }, []);

  return (
    <View>
      <View style={styles.quiz}>
        <View style={styles.quizHeader}>
          <View style={styles.quizUser}>
            <Text style={styles.h2}>WELCOME {username.toUpperCase()}</Text>
          </View>
          <View style={{marginRight: 20, color: 'white'}}></View>
        </View>
        <View style={styles.quizBody}>
          <View id="questions">
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {questions[questionCount].question}
            </Text>
            <View style={styles.optionGroup}>
              <RadioButtonRN
                data={questions[questionCount].options}
                selectedBtn={e => SetSelectedValue(e.label)}
              />
            </View>
          </View>
          <TouchableOpacity onPress={next} style={styles.btnNext}>
            <Text style={{color: 'white', textAlign: 'center'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quiz: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  quizHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#16A085',
  },
  quizUser: {
    alignItems: 'center',
    padding: 15,
  },

  quizBody: {
    justifyContent: 'center',
    padding: 20,
    width: 300,
    height: 'auto',
  },

  h2: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  optionGroup: {
    marginTop: 30,
    marginBottom: 30,
  },
  option: {
    width: 100,
    marginBottom: 15,
    marginLeft: 15,
  },
  btnNext: {
    backgroundColor: '#16A085',
    color: 'aliceblue',
    padding: 8,
    borderRadius: 20,
    width: 80,
    justifyContent: 'flex-end',
    marginLeft: 180,
  },
});

export default QuestionBox;
