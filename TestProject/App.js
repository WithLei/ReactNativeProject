/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={styles.container}>
//       <Image source={pic} style={{width: 193, height: 110}} />
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Text style={styles.instructions}>
//         Test content
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// import React, { Component } from 'react';
// import { Text } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//  render() {
//    return (
//      <Text>Hello world!</Text>
//    );
//  }
// }

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };
//
//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }
//
//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       <View style={{height: 300}}>
//         <View style={{flex: 100, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 2, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class AlignItemsBasics extends Component {
//   render() {
//     return (
//       // 尝试把`alignItems`改为`flex-start`看看
//       // 尝试把`justifyContent`改为`flex-end`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View ,Button, Alert} from 'react-native';
//
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Button
//           onPress={() => {
//           Alert.alert("你点击了按钮！");}}
//           title="点我！"
//           />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
//
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
//
// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//
//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }
//
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })

// import React, { Component } from 'react';
// import { ScrollView, Image, Text, StyleSheet} from 'react-native';
//
// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:24}}>Scroll me plz</Text>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Text style={{fontSize:24}}>If you like</Text>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Text style={{fontSize:24}}>Scrolling down</Text>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Text style={{fontSize:24}}>Whats the best</Text>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Text style={{fontSize:24}}>Framework around?</Text>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Image source={require('./img/user.jpg')} style={styles.img}/>
//           <Text style={{fontSize:18}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   img: {
//     width: 100,
//     height: 100
//   }
// })

// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
//
// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// import React, { Component } from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';
//
// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// import React, { Component } from "react";
//
// import { Image, FlatList, StyleSheet, Text, View } from "react-native";
//
// var REQUEST_URL =
//   "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
//
// export default class SampleAppMovies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false
//     };
//     // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
//     // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
//     this.fetchData = this.fetchData.bind(this);
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData() {
//     fetch(REQUEST_URL)
//       .then(response => response.json())
//       .then(responseData => {
//         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
//         this.setState({
//           data: this.state.data.concat(responseData.movies),
//           loaded: true
//         });
//       });
//   }
//
//   render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }
//
//     return (
//       <FlatList
//         data={this.state.data}
//         renderItem={this.renderMovie}
//         style={styles.list}
//       />
//     );
//   }
//
//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>Loading movies...</Text>
//       </View>
//     );
//   }
//
//   renderMovie({ item }) {
//     // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
//     // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{ uri: item.posters.thumbnail }}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.year}>{item.year}</Text>
//         </View>
//       </View>
//     );
//   }
// }
//
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   rightContainer: {
//     flex: 1
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: "center"
//   },
//   year: {
//     textAlign: "center"
//   },
//   thumbnail: {
//     width: 53,
//     height: 81
//   },
//   list: {
//     paddingTop: 20,
//     backgroundColor: "#F5FCFF"
//   }
// });

// import React, { Component } from 'react';
// import { Platform,View } from "react-native";
//
// if (Platform.Version === 25) {
//   console.log("Running on Nougat!");
// }

import React from "react";
import PropTypes from "prop-types";
import { Button, NavigatorIOS, Text, View } from "react-native";

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: "My Initial Scene",
          passProps: { index: 1 }
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: "Scene " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    );
  }
}
