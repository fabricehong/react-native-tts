import React from 'react';


const Task = (props)=>{
    const {text, isDone, onValueChange, onPress} = props;
    return (
        <ListItem onPress={onPress}>
            <CheckBox onPress={onValueChange} checked={isDone} />
            <Body>
              <Text style={[styles.text, {color : isDone ? '#bbb' : '#888', textDecorationLine: isDone ? 'line-through' : null}]}>{text}</Text>
            </Body>
          </ListItem>
    )
  }

  export default Task;