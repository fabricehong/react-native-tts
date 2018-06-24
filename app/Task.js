import React from 'react';
import { StyleSheet } from 'react-native';
import {ListItem, CheckBox, Body, Text} from 'native-base';

const Task = (props) => {
    const {text, isDone, onValueChange, onPress} = props;
    return (
        <ListItem onPress={onPress}>
            <CheckBox onPress={onValueChange} checked={isDone}/>
            <Body>
                <Text
                    style={[
                    styles.text, {
                        color: isDone
                            ? '#bbb'
                            : '#888',
                        textDecorationLine: isDone
                            ? 'line-through'
                            : null
                    }
                ]}>{text}</Text>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create(
    {
        text : {
            fontSize : 19
          }
    }
);


export default Task;