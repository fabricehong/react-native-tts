import React, {Component} from 'react';

import { Platform, Text, View, StyleSheet, TextInput, ScrollView, CheckBox } from 'react-native';
import MyCheckBox from './MyCheckBox';

let currentTaskId = 0;
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  switchChecked(taskId) {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task => ({
          ...task,
          isDone: task.id == taskId
            ? !task.isDone
            : task.isDone
        }))
    });
  }

  addTask() {
    this.setState({
      ...this.state,
      tasks: [
        {
          id : currentTaskId++,
          text: this.state.taskInputText,
          isDone: false
        },
        ...this.state.tasks
      ],
      taskInputText: null
    });
  }

  render() {
    const tasks = this.state.tasks;
    return (
      <View style={styles.container}>
        <Text style={styles.title} >todos</Text>
        <TextInput style={[styles.text]} autoCorrect={false}
            onSubmitEditing={(event) => this.addTask()}
            onChangeText={text =>
              this.setState({
                ...this.state,
                taskInputText: text
              })}
          value={this.state.taskInputText}
          placeholder="What needs to be done ?"/>
        <ScrollView>
          {
            tasks.map((task =>
              <Task key={task.id} onValueChange={_ => this.switchChecked(task.id)} {...task} />
              )
            )
          }
        </ScrollView>
      </View>

    );
  }
}

const Task = (props)=>{
  const {text, isDone, onValueChange} = props;
  return (
    <View style={{flexDirection: 'row', margin:10}} >
      <MyCheckBox value={isDone} onValueChange={onValueChange}/>
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
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: '#400'
    },
    text : {
      fontSize : 19
    }
  }
);