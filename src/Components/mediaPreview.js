import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import ChatSend from './chatSend';
import ButtonWithSvg from './buttonWithsvg';
import CloseSvg from '../Svgs/closeSvg';
import PlaySvg from '../Svgs/playSvg';
import StopSvg from '../Svgs/stopSvg';
import VideoToggler from './videoToggler';
import {goBack} from '../Navigation';
import Video from 'react-native-video';

const MediaPreview = ({DataToPreview}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoPaused, setvideoPaused] = useState(true);

  const onCurrentPage = index => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        {activeIndex == 1 ? (
          <Image
            source={require('../gif/pokemon.gif')}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        ) : activeIndex == 0 && DataToPreview.type == 'Image' ? (
          <Image
            source={{uri: `${DataToPreview.source}`}}
            style={styles.backgroundVideo}
            resizeMode={'contain'}
          />
        ) : (
          <Video
            resizeMode="contain"
            paused={videoPaused}
            source={{uri: `${DataToPreview.source}`}}
            style={styles.backgroundVideo}
          />
        )}

        <View style={styles.viewTop}>
          <ButtonWithSvg onPress={() => goBack()} Svg={() => <CloseSvg />} />

          {DataToPreview.type == 'Image' ? null : (
            <View>
              <Text style={styles.textOne}>Status</Text>
            </View>
          )}
          {DataToPreview.type == 'Image' ? null : (
            <View style={{position: 'absolute', right: 0}}>
              <VideoToggler onCurrentPage={onCurrentPage} />
            </View>
          )}
        </View>

        {DataToPreview.type == 'Image' ? null : (
          <View>
            <ButtonWithSvg
              onPress={() => setvideoPaused(prev => !prev)}
              Svg={() => (videoPaused ? <PlaySvg /> : <StopSvg />)}
            />
          </View>
        )}

        <View style={styles.viewBottom}>
          <ChatSend />
        </View>
      </View>
    </React.Fragment>
  );
};

export default MediaPreview;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTop: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  viewBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  textOne: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    paddingLeft: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: -20,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
