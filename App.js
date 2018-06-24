import { createStackNavigator } from 'react-navigation';
import TodoList from './app/TodoList';
import TodoDetail from './app/TodoDetail';
import React from 'react';
import IconInitializer from './app/IconInitializer';
import NavHeader from './app/NavHeader';

const RootNavigator = createStackNavigator({
    Home: { screen: TodoList },
    Detail: { screen: TodoDetail },
  },
  {
    navigationOptions: {
      /*
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },*/
      header: ({navigation}) => (
        <NavHeader navigation={navigation}/>
      )
    },
  }
);

export default props => (
  <IconInitializer>
    <RootNavigator/>
  </IconInitializer>
);