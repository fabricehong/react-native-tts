import React from 'react';
import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Content,
    Footer,
    Text,
    FooterTab,
    Item,
    Input,
    View
} from 'native-base';
import MyCheckBox from './MyCheckBox';
import { StyleSheet, Platform } from 'react-native';

let currentTaskId = 0;

const Task = (props)=>{
    const {text, isDone, onValueChange} = props;
    return (
      <View style={{flexDirection: 'row', margin:10}} >
        <MyCheckBox value={isDone} onValueChange={onValueChange}/>
        <Text style={[styles.text, {color : isDone ? '#bbb' : '#888', textDecorationLine: isDone ? 'line-through' : null}]} >{text}</Text>
      </View>
    )
  }
export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ready:true})
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
      
    addTask = () => {
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
        if (!this.state.ready) {
            return null;
        }
        return (
            <Container >
                <Header style={styles.header} >
                    <Left>
                        <Button transparent>
                            {/* <Icon name='menu'/> */}
                        </Button>
                    </Left>
                    <Body>
                        <Title>Headerk</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.content} >
                        <Item regular>
                            <Input
                                autoCorrect={false}
                                onSubmitEditing={(event) => this.addTask()}
                                onChangeText={text =>
                                this.setState({
                                    ...this.state,
                                    taskInputText: text
                                })}
                                value={this.state.taskInputText}
                                placeholder="What needs to be done ?"
                            />
                        </Item>
                    <Content >
                        {
                            tasks.map((task =>
                                <Task key={task.id} onValueChange={_ => this.switchChecked(task.id)} {...task} />
                                )
                              )
                        }
                    </Content>
                </View>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Button1</Text>
                        </Button>
                        <Button full>
                            <Text>Button2</Text>
                        </Button>
                        <Button full>
                            <Text>Button3</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

console.log(`KKK: ${Expo.Constants.statusBarHeight}`);

const styles = StyleSheet.create(
    {
        header: {
            paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
            height: 54 + Expo.Constants.statusBarHeight
        },
        content: {
            margin:10,
            flex:1
        }
    }
);