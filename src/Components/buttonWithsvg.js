import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const ButtonWithSvg = ({Svg, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      {Svg ? Svg() : null}
    </TouchableOpacity>
  );
};

export default ButtonWithSvg;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'pink',
    padding: 10,
  },
});
