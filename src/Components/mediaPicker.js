import React, {useState, useEffect, useRef, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import CameraBtn from './cameraBtn';
import ButtonWithSvg from './buttonWithsvg';
import InvertCameraSvg from '../Svgs/invertCamerasvg';
import BackArrowSvg from '../Svgs/backArrowsvg';
import GallerySvg from '../Svgs/gallerySvg';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import ImagePicker from 'react-native-image-crop-picker';
import TimeCounter from './timeCounter';

const MediaPicker = ({MediaPicked, setActivityHide, activityHide}) => {
  const [
    {isRecording, type, ratio, autoFocus},
    {setIsRecording, toggleFacing},
  ] = useCamera(null);

  const myCameraRef = useRef(null);

  const recordOptions = {
    mute: false,
    maxDuration: 5,
    quality: RNCamera.Constants.VideoQuality['1080p'],
    mirrorVideo: true,
  };

  const capturePicture = () => {
    setActivityHide(true);
    myCameraRef.current
      .takePictureAsync({
        mirrorImage: type === 'front' ? true : false,
        orientation: type === 'front' ? 2 : 1,
      })
      .then(imgaeTaken => {
        console.log(`Image Capturing`);
        MediaPicked(imgaeTaken.uri, 'Image');
        setActivityHide(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const captureVideo = () => {
    console.log(`Recording Initiated`);
    setIsRecording(true);

    myCameraRef.current
      .recordAsync(recordOptions)
      .then(recordedVideoRes => {
        console.log(`Video Recorded`);
        // console.log(recordedVideoRes)
        MediaPicked(recordedVideoRes.uri, 'Video');
        setIsRecording(false);
      })
      .catch(err => {
        console.log(`CATCH Error in recording videeo`);
        console.log(err);
      });
  };

  const imagePickedFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      MediaPicked(image.path, 'Image');
      setActivityHide(false);
    });
  };

  return (
    <React.Fragment>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <RNCamera
          ref={myCameraRef}
          type={type}
          style={{flex: 1}}
          ratio={ratio}
          useNativeZoom
          focusable
          autoFocus={autoFocus}
        >
          <View style={styles.mainContainer}>
            <View style={styles.topView}>
              <View style={{paddingLeft: 10}}>
                <ButtonWithSvg Svg={() => <BackArrowSvg />} />
              </View>
              {isRecording ? <TimeCounter /> : null}
              <View style={{width: 50}} />
            </View>

            <View style={styles.bottomView}>
              <View style={styles.leftView}>
                <ButtonWithSvg
                  onPress={() => imagePickedFromGallery()}
                  Svg={() => <GallerySvg />}
                />
              </View>
              <View style={styles.middleView}>
                <CameraBtn
                  onRecordingStart={() => captureVideo()}
                  onCapturePhoto={() => capturePicture()}
                  onRecordingEnd={() => myCameraRef.current.stopRecording()}
                />
              </View>
              <View style={styles.rightView}>
                <ButtonWithSvg
                  onPress={() => toggleFacing()}
                  Svg={() => <InvertCameraSvg />}
                />
              </View>
              <View />
            </View>
          </View>

          {activityHide ? (
            <View
              style={[
                {...StyleSheet.absoluteFillObject},
                styles.spinnerScreenView,
              ]}
            >
              <ActivityIndicator size={'large'} color={'green'} />
            </View>
          ) : null}
        </RNCamera>
      </View>
    </React.Fragment>
  );
};

export default MediaPicker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black'
  },
  topView: {
    position: 'absolute',
    top: 10,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
  },
  rightView: {
    width: '30%',
    height: '100%',
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftView: {
    width: '30%',
    height: '100%',
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    width: '40%',
    height: '100%',
    // backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerScreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
});
