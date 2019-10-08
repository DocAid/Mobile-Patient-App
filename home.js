import * as React from 'react';
import {
  Text,StyleSheet, TouchableOpacity
} from 'react-native'
import { Container, Header, Content, Left,Right, View, Button} from 'native-base'
import { Icon } from 'react-native-elements'
import Cardie from './card'
import Floating from './floatingbut'

export default class App extends React.Component {
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
            <Text style={[{color:'#fff',fontSize:26},styles.text1]}>     Hello Sam{'\n'}<Text style={[{color:'#fff',fontSize:15},styles.text1]}>         Your Medical History</Text></Text>
        ),

        headerRight: (
            <TouchableOpacity onPress={() => ToastAndroid.show('Notification', ToastAndroid.SHORT)}>
                <View style={{ paddingRight: 24 }}>
                <TouchableOpacity><Icon type="font-awesome" name="bell" color={'#fff'}></Icon></TouchableOpacity>
                </View>
            </TouchableOpacity>
        ),

        headerLeft: (
            <TouchableOpacity onPress={() => ToastAndroid.show('Menu', ToastAndroid.SHORT)}>
                <View style={{ paddingLeft: 19 }}>
                <TouchableOpacity><Icon type="font-awesome" name="bars" color={'#fff'}></Icon></TouchableOpacity>
                </View>
            </TouchableOpacity>
        ),
    });

    state = {
      loading:'true',
      dataSource:""
    }

    pid = this.props.navigation.getParam('pid', "hello123")
    index=[1,2,3,4]
    meddata = [
      {
          name:["Ibugesic","Ibuprofen","Happy-D","Rhus Tox"],
          mg:500,
          doc:"Pramila Nair",
          date:"17 Aug 2019",
          diagnosis:"Diagnosed of fever cold and running nose.",
          dur:"5",
          dos:["1-0-1","1-0-1","1-0-1","1-0-1","1-0-1"]
      },
      {
        name:["Dolo","Ibuprofen","Geltax","Rhus Tox"],
        mg:700,
        doc:"Ronit Baracuda",
        date:"22 September 2019",
        diagnosis:"Diagnosed of Diarrhoea",
        dur:"5",
        dos:["1-0-1","1-0-1","1-0-1","1-0-1","1-0-1"]
    },
    {
      name:["Limotil","Gastroex","Dolo","Proentmen"],
      mg:650,
      doc:"Raghava Fullerman",
      date:"30 October 2019",
      diagnosis:"Diagnosed of Typhoid",
      dur:"5",
      dos:["1-0-1","1-0-1","1-0-1","1-0-1","1-0-1"]      
  },
  {
    name:["Livomyn","Coughex","Rhus Tox"],
    mg:500,
    doc:"Aniruddha Manyata",
    date:"1 Dec 2019",
    diagnosis:"Diagnosed of Mumps",
    dur:5,
    dos:["1-0-1","1-0-1","1-0-1","1-0-1","1-0-1"]
  },
]

render() {
  return (
    <Container>
      <Content>
        <View style={{flex:1,width:350,justifyContent:'center',marginLeft:5,marginRight:5}}>
          {this.meddata.map((meddata,index)=><Cardie info={meddata} key={index}/>)}
        </View>
      </Content>
      <Floating pid={this.pid}/>
    </Container>
    
  );
    }
};

const styles = StyleSheet.create({
 text1:{
   color:'#fff'
 }
});

