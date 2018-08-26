import React,{Component}from'react';

import {
AppRegistry,
Text,
View,
Button,
StyleSheet,
Image,
ScrollView ,
} from'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class Three extends Component {

render() {
  return (
      <ScrollView
        style={styles.sv_main}
        >
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
          <Image style={styles.iv_style} source={require('../img/user.jpg')} />
      </ScrollView >
    );
}

}

const styles = StyleSheet.create({
  sv_main : {
    flex:1,
  },
  iv_style: {
    width: width * 0.3,
    height: width * 0.3,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Three;//导出Three  让别的导入时可以找到
