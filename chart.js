import * as React from 'react'

import {Image,View, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import {Container, Content, Card, CardItem} from 'native-base'

export default class extends React.Component{

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
            <Text style={[{color:'#fff',fontSize:26}]}>Stats</Text>
        ),

        headerLeft: (
            <TouchableOpacity onPress={()=>{
              navigation.goBack()
            }}>
                <View style={{ paddingLeft: 19 }}>
                <TouchableOpacity><Icon type="font-awesome" name="arrow-left" color={'#fff'}></Icon></TouchableOpacity>
                </View>
            </TouchableOpacity>
        ),
    });

    state = {
        url1:"",
        url2:"",
        url3:""
    }

    componentDidMount(){
            fetch('http://2e57750b.ngrok.io/charts1', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({pid:'POC008'})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({url1:(responseJson.chart_url).toString()})})
      .catch((error) => {
      console.error(error);
      });

      fetch('http://2e57750b.ngrok.io/charts2', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pid:'POC008'})
  })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({url2:(responseJson.chart_url).toString()})})
.catch((error) => {
console.error(error);
});

fetch('http://2e57750b.ngrok.io/charts3', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({pid:'POC008'})
})
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({url3:(responseJson.chart_url).toString()})})
.catch((error) => {
console.error(error);
});
    
    }

      render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
            <Image style={{height:300,width:300}} source={{uri:this.state.url1}}></Image>
            </CardItem>
            <CardItem>
            <Text>1. {this.state.url1}{'\n'}</Text>
            </CardItem>
            </Card>
            <Card>
                <CardItem>
            <Image style={{height:300,width:300}} source={{uri:this.state.url2}}></Image>
            </CardItem>
            <CardItem>
            <Text>2. {this.state.url2}{'\n'}</Text>
            </CardItem>
            </Card>
            <Card>
            <CardItem>
            <Image style={{height:300,width:300}} source={{uri:this.state.url3}}></Image>
            </CardItem>
            <CardItem>
            <Text>3. {this.state.url3}{'\n'}</Text>
            </CardItem>
            </Card>
            </Content>
            </Container>
        );
    }
}

//2e57750b.ngrok.io/charts2