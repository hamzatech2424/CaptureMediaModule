import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SegmentedControl from 'rn-segmented-control';

const VideoToggler = ({onCurrentPage}) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
    onCurrentPage(index);
  };

  return (
    <SegmentedControl
      tabs={['video', 'GIF']}
      width={150}
      activeSegmentBackgroundColor={'#FF5B7F'}
      segmentedControlBackgroundColor={'white'}
      activeTextColor={'white'}
      tileStyle={{borderRadius: 20}}
      containerStyle={{
        borderRadius: 20,
        backgroundColor: 'white',
        height: 25,
        justifyContent: 'center',
      }}
      textStyle={{
        fontSize: 14,
      }}
      paddingVertical={1}
      currentIndex={tabIndex}
      onChange={handleTabsChange}
    />
  );
};

export default VideoToggler;

const styles = StyleSheet.create({});
