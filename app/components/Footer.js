import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{color:'white'}}>Developed By Muhammad Maaz Azhar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#16A085',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Footer;
