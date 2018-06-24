import React from 'react';
import {
    Container,
    Button,
    Content,
    Footer,
    Text,
    FooterTab,
    Item,
    Input,
    View,
} from 'native-base';
import { StyleSheet } from 'react-native';
import Task from './Task';

let currentTaskId = 0;

export default class Test extends React.Component {

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

    navigateToDetail = task => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {task});
    }

    render() {
        const { tasks } = this.state;
        return (
            <Container >
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
                                <Task onPress={() => this.navigateToDetail(task)} key={task.id} onValueChange={_ => this.switchChecked(task.id)} {...task} />
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

const styles = StyleSheet.create(
    {
        content: {
            margin:10,
            flex:1
        }
    }
);