import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, StatusBar} from 'react-native';
import MediaPicker from '../Components/mediaPicker';
import {navigate} from '../Navigation';

const MediaCapturingScreen = () => {
  const [activityHide, setActivityHide] = useState(false);

  const MediaPicked = (source, type) => {
    navigate('MediaPreview', {myData: {source, type}});
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <MediaPicker
        MediaPicked={MediaPicked}
        activityHide={activityHide}
        setActivityHide={setActivityHide}
      />
    </View>
  );
};

export default MediaCapturingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
