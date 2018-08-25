import React,{Component}from'react';

import {
AppRegistry,
Text,
View,
Button,
} from'react-native';

class Three extendsReact.Component {

static navigationOptions = {

title: 'Three Sceen',

};

render() {

const { goBack } =
this.props.navigation;

return (

<Button
title="Go back"
onPress={()=>goBack()}
/>
);

}

}

export default Three;//导出Three  让别的导入时可以找到
