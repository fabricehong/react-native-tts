import React, {Component} from 'react';

import { Platform, Text, View, StyleSheet, TextInput, ScrollView, CheckBox } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >todos</Text>
        <TextInput style={[styles.text, {marginBottom:10}]} autoCorrect={false}
          placeholder="What needs to be done ?"/>
        <ScrollView>
          <View style={{flexDirection: 'row', margin:10}} >
            <CheckBox style={{marginRight: 7}}/>
            <Text style={styles.text}>My task</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding:30,
      backgroundColor: '#fffafa',
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
      color: '#400'
    },
    text : {
      fontSize : 22
    }
  }
);