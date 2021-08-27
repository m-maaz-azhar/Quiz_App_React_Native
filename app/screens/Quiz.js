import React from 'react';
import {View,StyleSheet,} from 'react-native';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import QuestionBox from '../components/QuestionBox';

function Quiz(props) {

  return (
    <View style={styles.wrapper}>
      <AppBar PageTitle="QUIZ" />
      <QuestionBox navigator={props.navigation}/>
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
});

export default Quiz;
