import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from './home'
import second from './second'
import qrcode from './qrcode'
import login from './login'
import signup from './signup'

const RootStack = createStackNavigator(
  {
    login:login,
    signup:signup,
    home: home,
    second: second,
    qrcode:qrcode,
  },
  {
    initialRouteName: 'login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Root extends React.Component {
  render() {
    return <AppContainer />;
  }
}