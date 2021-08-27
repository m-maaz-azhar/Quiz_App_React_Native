import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AppBar({PageTitle}) {
  return (
    <View style={styles.AppBar}>
      <Text style={{color:'#fff',fontSize:18,fontWeight:"bold"}}>{PageTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    backgroundColor: '#16A085',
    padding: 20,
    alignItems: 'center',
    width:'100%'
  },
});

export default AppBar;
