import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Textarea, View, Content, Input, Item } from 'native-base';

class TodoDetail extends React.Component {

    constructor(props) {
        super(props);
        const task = this.props.navigation.state.params.task;
        // this.state = {};
        this.state = {
            text: task ? task.text : null,
        };
    }

    render() {
        const { text } = this.state;
        return (
            <Container >
                <View style={styles.content} >
                    <Content >
                        <Item regular>
                            <Input
                                autoCorrect={false}
                                placeholder="What needs to be done ?"
                                value={text}
                                onChangeText={txt => this.setState({text: txt})}
                            />
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Notes" />
                    </Content>
                </View>
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

export default TodoDetail;