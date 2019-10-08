import * as React from 'react';
import {Text,TextInput,Image,View, StyleSheet, ToastAndroid} from 'react-native'
import {Button} from 'react-native-elements'
import { Container, Content } from 'native-base';

export default class App extends React.Component {
    static navigationOptions = () => ({
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 22,
        },
        headerTitle: (
           <Text>&nbsp;</Text>
        ),
    });

render() {
  return (
      <Container>
          <Content>
      <View style={{alignContent:'center',alignSelf:'center',justifyContent:'center',width:200}}>
          <View style={{alignSelf:'center'}}>
    <Image source={{ uri: "https://i.ibb.co/090wFk1/Deepin-Screenshot-20190821152323-removebg-preview.png"}} style={{width:80 ,height:80}}/>
    <Text style={{fontSize:25,fontFamily:'HelveticaNeue-UltraLightItalic'}}>{'\n'}DocAid{'\n'}</Text></View>
    <TextInput placeholder=" Patient ID" style={styles.box1}/><Text></Text>
    <TextInput placeholder=" Password" style={styles.box1}></TextInput><Text>{'\n'}</Text>
    <Button title="Login"></Button>
    <Text></Text>
    <Button title="Signup" onPress={()=>{
        this.props.navigation.navigate('signup')
    }}></Button>
    <Text></Text>
    <Button title="Use Guest Account" onPress={()=>{
        ToastAndroid.show('Login Successful!',ToastAndroid.SHORT)
        this.props.navigation.navigate('home')
    }}></Button>
    <Text>&nbsp;</Text>
    </View>
    </Content>
    </Container>
  );
}
};

const styles = StyleSheet.create({
    box1:{
        borderColor:'#2B56BE',
        borderRadius:5,
        borderWidth:2
    }
})
