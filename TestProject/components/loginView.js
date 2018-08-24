'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  ToastAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class loginView extends Component {
  //不可更改元素
  // getDefaultProps(){
  //   return{
  //     appName : '测试应用',
  //   }
  // }

  //可更改元素
  // getInitialState(){
  //   return{
  //     title : '首界面',
  //   }
  // }

    render() {
      return (
        <ImageBackground style={{height:height}}
            source={require('../img/login_background.jpg')} >
            <View style={styles.mainView}>
                  <Image style={styles.iv_style} source={require('../img/user.jpg')} />
                  <TextInput
                        style={styles.et_id_style}
                        placeholder={'请输入电子邮箱或手机号'}
                        underlineColorAndroid='transparent'
                        disableFullscreenUI={true}
                        />
                  <TextInput
                        style={styles.et_pwd_style}
                        placeholder={'请输入密码'}
                        password={true}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangedText={(text) => ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT)}
                        disableFullscreenUI={true}
                        />
                  <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.btn_press()}
                        >
                        <View style={styles.btn_login} >
                            <Text style={styles.tv_login}>登陆</Text>
                        </View>
                  </TouchableOpacity>
                  {/*
                  <Text>{this.props.appName}</Text>
                  <Text>{this.state.title}</Text>
                  */}
            </View>
       </ImageBackground>
    );
  }

  btn_press(){
    console.log("onPressIn");
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  }
}

// // iOS和Android上都可用
// Alert.alert(
//   'Alert Title',
//   'My Alert Msg',
//   [
//     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//     {text: 'OK', onPress: () => console.log('OK Pressed')},
//   ],
//   { cancelable: false }
// )

// ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
  },

  iv_style: {
    width: width * 0.3,
    height: width * 0.3,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },

  et_id_style: {
    marginTop: 20,
    height: 32,
    width: width * 0.8,
    padding: 7,
    marginBottom:3,
    backgroundColor: 'white',
    borderRadius: 2,
  },

  et_pwd_style: {
    height: 32,
    width: width * 0.8,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 2,
  },

  btn_login: {
    marginTop: 10,
    height: 32,
    width: width * 0.8,
    backgroundColor: '#0527AF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tv_login: {
    color: 'white',
  },

});

module.exports = loginView;
