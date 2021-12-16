import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TimeCounter = () => {
  return (
    <View style={styles.recordingTime}>
      <Text style={styles.textTwo}>00:00</Text>
    </View>
  );
};

export default TimeCounter;

const styles = StyleSheet.create({
  recordingTime: {
    width: 60,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  textTwo: {
    fontSize: 14,
    color: 'white',
  },
});
