import * as React from 'react'
import {
  Text,TouchableOpacity,View, TouchableHighlight,ToastAndroid
} from 'react-native'
import {Icon} from 'react-native-elements'
import {withNavigation} from 'react-navigation'
import { Card,CardItem,Left,Right } from 'native-base';

class secondone extends React.Component {
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
        <Text style={{color:'#fff',fontSize:26}}>     {'\n'}Your Prescription{'\n'}</Text>
    ),

    headerLeft: (
          <View style={{ paddingLeft: 19 }}>
            <TouchableOpacity onPress={()=>{
              navigation.goBack()
            }}><Icon type="font-awesome" name="arrow-left" color={'#fff'}></Icon></TouchableOpacity>
            </View>
      ),
});

namedata = this.props.navigation.getParam('first', ["Paracetamol","Dolo","Calpol"])
dosdata = this.props.navigation.getParam('second', ["1-0-1","1-0-1","1-0-1","1-0-1","1-0-1"])
docdata = this.props.navigation.getParam('third', "Dr. Pramila Nair")
datedata = this.props.navigation.getParam('fourth', "16th October 2019")

  render(){
    return(
      <View><View style={{backgroundColor:'#2B56BE'}}><Text style={{color:'#fff'}}>                   {this.docdata}{'\n\t'}                 Last Visit on {this.datedata}{'\n'}&nbsp;</Text></View>
       {this.namedata.map((namedata,index)=><Card key={index}>
        <CardItem>
          <Left>
            <Text style={{fontFamily:'Roboto',fontSize:20}}>{namedata}{'\n'}<Text style={{fontSize:18}}>{this.dosdata[index]}</Text>
            </Text>
            </Left>
            <Right>
              <TouchableOpacity onPress={()=>{ToastAndroid.show('Succesfully Set Reminder!', ToastAndroid.SHORT)}}>
                <View style={{borderColor:'#2B56BE',borderWidth:2,height:35,width:87,borderRadius:5}}>
                  <Text style={{color:'#2B56BE',fontSize:10}}>{'\n'}   SET REMINDER </Text></View></TouchableOpacity></Right>
                  </CardItem>
      </Card>
        )}
        </View>
    );
  }
}

export default withNavigation(secondone);
