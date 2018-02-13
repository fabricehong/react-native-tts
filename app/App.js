import React, {Component} from 'react';

import { Platform, Text, View, StyleSheet, TextInput, ScrollView, CheckBox } from 'react-native';
import MyCheckBox from './MyCheckBox';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >todos</Text>
        <TextInput style={[styles.text, {marginBottom:10}]} autoCorrect={false}
          placeholder="What needs to be done ?"/>
        <ScrollView>
          <Task text='prepare presentation' isDone={true} />
          <Task text='book restaurant' isDone={false} />
        </ScrollView>
      </View>

    );
  }
}

const Task = (props)=>{
  const {text, isDone} = props;
  return (
    <View style={{flexDirection: 'row', margin:10}} >
      <MyCheckBox value={isDone} />
      <Text style={[styles.text, {color : isDone ? '#bbb' : '#888', textDecorationLine: isDone ? 'line-through' : null}]} >{text}</Text>
    </View>
  )
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