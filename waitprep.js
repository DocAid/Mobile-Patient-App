'use strict';
 
import React, { Component } from 'react';
 
import { Text, Linking,View,ToastAndroid, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Button} from 'react-native-elements'
 
class ScanScreen extends Component {
  state = {
    data:""
  }

  postit = () =>{
    fetch('http://34.93.231.96:5000/sendReportToDB', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({pid:"hello123"})
   })
       .then((response) => response.json())
       .then((responseJson) => {
           this.setState({text:(responseJson.pdf_url).toString()})})
 .catch((error) => {
 console.error(error);
});
}
  static navigationOptions = () => ({
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
        <Text style={{color:'#fff',fontSize:26}}>     Active Session</Text>
    ),
    headerLeft: (
         <Text>&nbsp;</Text>
  ),
});
 
  render() {
    return (
      <View style={{width:350,alignSelf:'center'}}>
       <Text>Waiting for Doctor's Prescription...{'\n'}</Text>
       <Button title="Get Electronic Presciption" onPress={()=>{
           this.postit()
           Linking.openURL(this.state.text).catch((err) => console.error('An error occurred', err));
       }}></Button>
       <Text></Text>
       <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default withNavigation(ScanScreen)
 
 