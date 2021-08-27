import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import StartQuiz from '../components/StartQuiz';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

function Dashboard(props) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <AppBar PageTitle="DASHBOARD" />
        <StartQuiz navigator={props.navigation} />
        <Footer />
      </View>
    </TouchableWithoutFeedback>
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

export default Dashboard;
