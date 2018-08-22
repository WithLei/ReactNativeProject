import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={require('./img/user.jpg')} style={styles.iv_style} />
        <TextInput style={styles.et_id_style} />
        <TextInput style={styles.et_pwd_style}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor:'yellow',
    // justifyContent:'center',
    alignItems:'center',
  },

  et_id_style: {
    width: 400,
    height: 50,
  },

  et_id_style: {

  },

  iv_style: {
    width: 100,
    height: 100,
  },
});
