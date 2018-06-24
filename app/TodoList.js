import React from 'react';
import * as Expo from 'expo';
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
import TodoDetail from './TodoDetail';
import Platform, {
    isPortrait,
    isLandscape,
    isTablet,
    isPhone,
  } from './utils/Platform';

let currentTaskId = 0;

export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            orientation: Platform.isPortrait() ? 'portrait' : 'landscape',
            devicetype: Platform.isTablet() ? 'tablet' : 'phone',
            selection: []
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: Platform.isPortrait() ? 'portrait' : 'landscape',
            });
            console.log('Nouvelle orientation: ' + this.state.orientation);
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
        this.setState({ selection: task });
        const hasLandscapeOrientation = this.state.orientation == 'landscape';
        console.log('selected task "' + this.state.selection.text + '" with landscape ' + hasLandscapeOrientation);
        if (!hasLandscapeOrientation) {
            const { navigation } = this.props;
            navigation.navigate('Detail', { task });
        }
    }

    render() {
        const { tasks } = this.state;
        const hasLandscapeOrientation = this.state.orientation == 'landscape';
        const hasSelection = (this.state.selection || null) != null;
        const detailComponent = hasLandscapeOrientation ? (
            <TodoDetail task={this.state.selection} />
            ) : null;
        return (
            <Container >
                <View style={styles.content} >
                    <View style={[styles.container, styles.leftView]}>
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
                    <View
                        style={[
                        styles.container,
                        hasLandscapeOrientation &&
                            hasSelection &&
                            styles.rightViewVisible,
                        ]}>
                        {detailComponent}
                    </View>
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

const styles = StyleSheet.create({
    content: {
      margin: 10,
      flex: 1,
      flexDirection: 'row'
    },
    container: {
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
    },
    leftView: {
      flex: 2,
      justifyContent: 'space-between',
    },
    rightViewVisible: {
      flex: 3,
    },
  });
  