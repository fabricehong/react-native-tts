import React from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as Expo from 'expo';

const NavHeader = ({navigation}) => (
    <Header style={styles.header}>
      <Left>
          <Button transparent onPress={()=>{navigation.dispatch(NavigationActions.back())}} >
              <Icon name='arrow-back'/>
          </Button>
      </Left>
      <Body>
          <Title>Headeross</Title>
      </Body>
      <Right/>
    </Header>
);

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

export default NavHeader;