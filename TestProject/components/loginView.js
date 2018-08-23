'use strict';
import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View ,TextInput, ImageBackground} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class loginView extends Component {
    render() {
      return (
        <ImageBackground style={{flex:1}}
            source={require('../img/login_background.jpg')} >
            <View style={styles.mainView}>
                  <Image style={styles.iv_style} source={require('../img/user.jpg')} />
                  <TextInput style={styles.et_id_style} placeholder={'请输入电子邮箱或手机号'} />
                  <TextInput style={styles.et_pwd_style} placeholder={'请输入密码'} />
                  <View style={styles.btn_login} >
                      <Text style={styles.tv_login}>登陆</Text>
                  </View>
            </View>
       </ImageBackground>
    );
  }
}

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
  },

  et_id_style: {
    marginTop: 20,
    height: 32,
    width: width * 0.8,
    padding: 7,
    marginBottom:1,
    backgroundColor: 'white',
  },

  et_pwd_style: {
    height: 32,
    width: width * 0.8,
    padding: 7,
    backgroundColor: 'white',
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
