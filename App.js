import { createStackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';
import Test from './app/Test';
import TodoDetail from './app/TodoDetail';
import React from 'react';
import IconInitializer from './app/IconInitializer';
import NavHeader from './app/NavHeader';

const App = createStackNavigator({
    Home: { screen: Test },
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
    <App/>
  </IconInitializer>
);