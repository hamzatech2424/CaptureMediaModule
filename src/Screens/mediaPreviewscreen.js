import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import MediaPreview from '../Components/mediaPreview';

const MediaPreviewScreen = ({route}) => {
  const {myData} = route.params;

  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <MediaPreview DataToPreview={myData} />
    </React.Fragment>
  );
};

export default MediaPreviewScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
