import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Quiz from './app/screens/Quiz';
import Navigation from './app/config/Navigation';
// import Dashboard from './app/screens/Dashboard';

function App() {
  return (
      <View style={{flex: 1}}>
        <Navigation/>
      </View>
  );
}

export default App;
