import React, {useState, useRef} from 'react';
import {StyleSheet, Animated, TouchableOpacity} from 'react-native';

const CameraBtn = ({onRecordingStart, onRecordingEnd, onCapturePhoto}) => {
  const isRecordingState = useRef(false);
  const initialValueInnerCircle = useRef(new Animated.Value(1)).current;

  const AnimateToFocus = () => {
    Animated.spring(initialValueInnerCircle, {
      toValue: 1.5,
      speed: 30,

      useNativeDriver: true,
    }).start();
  };

  const AnimateToNormal = () => {
    Animated.spring(initialValueInnerCircle, {
      toValue: 1,
      speed: 30,

      useNativeDriver: true,
    }).start();
  };

  const animatedOpacity = initialValueInnerCircle.interpolate({
    inputRange: [1, 2],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const _handelOnRecordStart = () => {
    isRecordingState.current = true;
    if (onRecordingStart) {
      onRecordingStart();
    }
  };

  const _handelOnEndRecord = () => {
    if (isRecordingState.current === true && onRecordingEnd) {
      onRecordingEnd();
      isRecordingState.current = false;
    }
  };

  const _handelPressOut = () => {
    AnimateToNormal();
    _handelOnEndRecord();
  };
  const _handelPressIn = () => {
    AnimateToFocus();
  };

  const _handelLongPress = () => {
    _handelOnRecordStart();
  };

  const _handlePress = () => {
    onCapturePhoto();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onLongPress={_handelLongPress}
      onPress={_handlePress}
      onPressIn={_handelPressIn}
      onPressOut={_handelPressOut}
      style={[
        [styles.viewOne, {transform: [{scale: initialValueInnerCircle}]}],
      ]}
    >
      <Animated.View style={[styles.viewInner, {opacity: animatedOpacity}]} />
    </TouchableOpacity>
  );
};

export default CameraBtn;

const styles = StyleSheet.create({
  viewOne: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInner: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
  },
});
