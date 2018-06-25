import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Textarea, View, Content, Input, Item } from 'native-base';

class TodoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.task = props.task || props.navigation.state.params.task;
        // this.state = {};
        this.state = {
            text: this.task.text,
            notes: this.task.notes,
        };
    }


    onChangeText = text => {
        this.task.text = text;
        this.setState({text});
    }

    onChangeNotes = notes => {
        this.task.notes = notes;
        this.setState({notes});
    }

    render() {
        const { text, notes } = this.state;
        return (
            <Container >
                <View style={styles.content} >
                    <Content >
                        <Item regular>
                            <Input
                                autoCorrect={false}
                                placeholder="What needs to be done ?"
                                value={text}
                                onChangeText={this.onChangeText}
                            />
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Notes" value={notes} onChangeText={this.onChangeNotes} />
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