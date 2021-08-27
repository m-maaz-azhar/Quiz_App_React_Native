import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';

function StartQuiz(props) {

  const [username, setUsername] = useState('')
  
  let startQuizFunc = () => {
    if (username === '') {
      alert('Username cannot be empty');
    } else {
      AsyncStorage.setItem('username', username);
      props.navigator.navigate('Quiz');
    }
  };

  return (
    <View style={styles.Welcome}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#777"
        placeholder="Please Enter Your Name Here!"
        onChangeText={(text)=>setUsername(text)}
      />
      <TouchableOpacity
        style={styles.StartBtn}
        onPress={() => startQuizFunc()}
        type="submit">
        <Text style={{color: '#fff'}}>START QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Welcome: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    borderBottomColor: '#16A085',
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  StartBtn: {
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    backgroundColor: '#16A085',
  },
});

export default StartQuiz;
