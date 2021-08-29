import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

function Result(props) {
  const [TotalScore, setTotalScore] = useState(0);
  const [EarnedScore, setEarnedScore] = useState(0);

  useEffect(() => {
    const getResultData = async () => {
      try {
        const NoOfQuestions = await AsyncStorage.getItem('NoOfQuestions');
        const earnedScore = await AsyncStorage.getItem('QuizScore');
        if (NoOfQuestions !== null && earnedScore !== null) {
          setTotalScore(+NoOfQuestions * 10);
          setEarnedScore(+earnedScore);
        }
      } catch (error) {
        alert(error);
      }
    };
    getResultData();
  }, []);

  return (
    <View style={styles.wrapper}>
      <AppBar PageTitle="RESULT" />
      <View style={styles.ResultContent}>
        <Text style={styles.h1}>
          {EarnedScore >= TotalScore / 2
            ? '🔥 \n CONGRATULATIONS !'
            : '😔 \n YOU ARE FAILED, BETTER LUCK NEXT TIME !'}
        </Text>
        <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>
          Your Score is {EarnedScore} out of {TotalScore}
        </Text>
        <TouchableOpacity
        style={styles.retakeBtn}
          onPress={() => props.navigation.navigate('Dashboard')}>
          <Text style={{color:'white'}}>Retake Quiz ?</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'aliceblue',
    justifyContent: 'space-between',
  },
  ResultContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    margin: 20,
    fontSize:22,
    textAlign:'center',
    lineHeight:40
  },
  retakeBtn:{
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop:20,
    borderRadius: 100,
    backgroundColor: '#16A085',
  }
});

export default Result;
