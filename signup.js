import * as React from 'react';
import {Text,TextInput,View, StyleSheet, ToastAndroid, TouchableOpacity} from 'react-native'
import {Button, Icon} from 'react-native-elements'
import { Container, Content } from 'native-base';
import { withNavigation } from 'react-navigation';

class App extends React.Component {
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
           <Text style={{color:'#fff',fontFamily:'Roboto',fontSize:22}}>Signup Form</Text>
        ),
        headerLeft: (
            <View style={{ paddingLeft: 19 }}>
              <TouchableOpacity onPress={()=>{
                navigation.goBack()
              }}><Icon type="font-awesome" name="arrow-left" color={'#fff'}></Icon></TouchableOpacity>
              </View>
        ),
    });

    state = {
        name:"Rohit",
        age:"10",
        address:"MSRIT hostel",
        email:"nimish@gmail.com",
        phone:"9876543210",
        height:"10",
        weight:"10",
        pid:"hello123",
        text:""
    }

    postit = () =>{
         fetch('http://3dd56d51.ngrok.io/patient_details', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.state)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({text:responseJson})})
      .catch((error) => {
      console.error(error);
    });
    }//http://83fae993.ngrok.io

render() {
  return (
      <Container>
          <Text>{'\n'}</Text>
          <Content>
      <View style={{alignContent:'center',alignSelf:'center',justifyContent:'center',width:325}}>
         
    <TextInput placeholder=" Name" style={styles.box1} onChangeText={(text) => this.setState({name:text})}/><Text></Text>
    <TextInput placeholder=" Age" style={styles.box1} onChangeText={(text) => this.setState({age:text})}></TextInput><Text>{'\n'}</Text>
    <TextInput placeholder=" Address" style={styles.box1} onChangeText={(text) => this.setState({address:text})}></TextInput><Text>{'\n'}</Text>
    <TextInput placeholder=" Email" style={styles.box1} onChangeText={(text) => this.setState({email:text})}></TextInput><Text>{'\n'}</Text>
    <TextInput placeholder=" Phone" style={styles.box1} onChangeText={(text) => this.setState({phone:text})}></TextInput><Text>{'\n'}</Text>
    <TextInput placeholder=" Height" style={styles.box1} onChangeText={(text) => this.setState({height:text})}></TextInput><Text>{'\n'}</Text>
    <TextInput placeholder=" Weight" style={styles.box1} onChangeText={(text) => this.setState({weight:text})}></TextInput><Text>{'\n'}</Text>
    <View style={{alignSelf:'center',width:200}}><Button title="Sign Up" onPress={()=>{
        this.setState({pid:this.state.name + this.state.age})
        this.postit()
        ToastAndroid.show('Patient Added!',ToastAndroid.SHORT)
        this.props.navigation.navigate('home',{
            pid:"hello123"
          })}}></Button>

    </View>
    <Text></Text>
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

export default withNavigation(App)