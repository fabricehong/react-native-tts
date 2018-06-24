import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Textarea, View, Content } from 'native-base';

const TodoDetail = props => (
    <Container >
        <View style={styles.content} >
            <Content >
                <Textarea rowSpan={5} bordered placeholder="Textarea" value={props.value} onChangeText={props.onChangeText} />
            </Content>
        </View>
    </Container>
)

const styles = StyleSheet.create(
    {
        content: {
            margin:10,
            flex:1
        }
    }
  );

export default TodoDetail;