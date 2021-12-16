import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SendBtnSvg from '../Svgs/sendBtnsvg';

const ChatSend = ({onSend}) => {
  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        <View style={styles.viewOne}>
          <View style={styles.inputView}>
            <TextInput
              placeholder={'Enter Caption ...'}
              style={{
                padding: 0,
                paddingLeft: 20,
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <TouchableOpacity onPress={onSend} style={styles.btnView}>
            <SendBtnSvg />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default ChatSend;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewOne: {
    width: '90%',
    // backgroundColor:'red',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputView: {
    width: '87%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  btnView: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#FF5B7F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    // fontFamily:'Raleway-SemiBoldItalic',
    fontSize: 13,
    paddingBottom: 5,
  },
});
