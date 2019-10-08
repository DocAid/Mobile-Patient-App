'use strict';
 
import React, { Component } from 'react';
 
import {
  Text,
  Linking,
  View,
  ToastAndroid
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Icon} from 'react-native-elements'
 
import QRCodeScanner from 'react-native-qrcode-scanner';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
 
class ScanScreen extends Component {
  state = {
    data:""
  }

  static navigationOptions = ({navigation}) => ({
    headerStyle: {
        backgroundColor: '#2B56BE',
        elevation: 0,
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 22,
    },

    headerTitle: (
        <Text style={{color:'#fff',fontSize:26}}>     Scan QR Code</Text>
    ),
    headerLeft: (
          <View style={{ paddingLeft: 19 }}>
             <TouchableOpacity onPress={() => navigation.goBack()}><Icon type="font-awesome" name="arrow-left" color={'#fff'}></Icon></TouchableOpacity>
          </View>
  ),
});

  onSuccess = (e) => {
    var abc = this.props.navigation.getParam('pid', "hello123")
    this.setState({data:e.data})
    fetch('http://5e9ef292.ngrok.io', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"uid":"hello123"})
})
         //.then((response) => response.json())
         //.then((responseJson) => {
             //this.setState({data:responseJson})})
   //.catch((error) => {
   //console.error(error);
 //});

    ToastAndroid.show(abc, ToastAndroid.SHORT);
    ToastAndroid.show(e.data, ToastAndroid.SHORT);
    this.props.navigation.goBack()
    Linking
    .openURL(e.data)
    .catch((err)=>{
      console.log("An error occured",err)
    })
  }
 
  render() {
    return (
      <View>
        <Text style={{fontFamily:'Roboto',fontSize:16}}>{'\n'}        Focus in on the doctor's referral QR Code{'\n\n\n\n'}</Text>
      <QRCodeScanner
        onRead={this.onSuccess}
      />
      </View>
    );
  }
}

export default withNavigation(ScanScreen)
 
 