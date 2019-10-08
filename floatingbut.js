import * as React from 'react';
import {StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

class floatin extends React.Component{
  pid = this.props.navigation.getParam('pid', "hello123")
  render(){ 
    return (
      <View>
          <TouchableHighlight style={styles.fab} onPress={()=>{
            this.props.navigation.navigate('qrcode',{pid:this.pid})
          }}>
            <Image source={{uri:'https://i.ibb.co/yhCS5fK/qr-code.png'}} style={{width:30,height:30}}></Image>
          </TouchableHighlight>
      </View>
    );
        }
  }


const styles = StyleSheet.create({
  fab:{
    height: 64,
    width: 67,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2B56BE',
  },
  text:{
    fontSize:30,
    color:'white'
  },
});

export default withNavigation(floatin)