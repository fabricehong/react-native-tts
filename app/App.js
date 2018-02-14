import React, {Component} from 'react';

import { Platform, Text, View, StyleSheet, TextInput, ScrollView, CheckBox, Button } from 'react-native';
import MyCheckBox from './MyCheckBox';
import Tts from 'react-native-tts';

let currentTaskId = 0;
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentDidMount() {
    Tts.getInitStatus().then(_=>{
      this.setState({
        ...this.state,
        ready: true
      });
      Tts.addEventListener('tts-start', (event) => console.log("start", event));
      Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
      Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    });
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

  sayTasks() {
    const doneTasks = this.state.tasks.filter(task => task.isDone).map(task => task.text);
    const undoneTasks = this.state.tasks.filter(task => !task.isDone).map(task => task.text);

    const message = `
      What I did yesterday was:
      ${doneTasks.length == 0 ? 'nothing' : doneTasks.join(", ")}
      
      What I will do today is:
      ${undoneTasks.length == 0 ? 'nothing' : undoneTasks.join(", ")}
    `;
    Tts.speak(message);
  }

  render() {
    const tasks = this.state.tasks;
    return (
      <View style={styles.container}>
        <Text style={styles.title} >My daily standup</Text>
        <TextInput style={[styles.text, {marginBottom:10}]} autoCorrect={false}
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
        {this.state.ready
          ? <Button title="Do the daily !" onPress={_ => this.sayTasks()}/>
          : null}
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