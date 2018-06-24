import { createStackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';
import Test from './app/Test';
import App2 from './app/App';
import React from 'react';
import IconInitializer from './app/IconInitializer';
import NavHeader from './app/NavHeader';

const App = createStackNavigator({
    Home: { screen: Test },
    Profile: { screen: App2 },
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