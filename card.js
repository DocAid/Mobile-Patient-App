import * as React from 'react'
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Card, CardItem,Left,Right} from 'native-base'
import { withNavigation } from 'react-navigation'

class card extends React.Component {
render(){
  return (
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('second',{
          first:this.props.info.name,
          second:this.props.info.dos,
          third:this.props.info.doc,
          fourth:this.props.info.date
        })}}>
        <Card style={{borderRadius:15}}>
          <CardItem>
            <Left>
               <Text style={{fontFamily:'Roboto',fontSize:18,fontWeight:'bold'}}>{this.props.info.name[0]}{'\t'}{this.props.info.mg}mg +{this.props.info.name.length}
               <Image source={{ uri: 'https://i.ibb.co/SBsmRcH/doctor-background-design-1270-62-1.png'}} style={{width:37 ,height:41}}/><Text style={{fontSize:14}}>&nbsp;&nbsp;{this.props.info.doc}{'\n\n'}<Text style={{color:'gray'}}>{this.props.info.date}</Text>{'\n'}<Text style={{fontWeight:'normal',fontSize:12,fontFamily:'Roboto'}}>{this.props.info.diagnosis}</Text>{'\n'}Duration: <Text style={{fontWeight:'normal',fontFamily:'Roboto',fontSize:12}}>{this.props.info.dur} days</Text></Text></Text>
               <Text></Text>
            </Left>
            <Right>
                <View style={{borderRadius:20,height:19,width:47,backgroundColor:'#62D0B3',justifyContent:"center",alignContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:9}}>&nbsp;&nbsp;&nbsp;ACTIVE</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <View style={{borderRadius:5,height:22,width:72,backgroundColor:'#2B56BE',justifyContent:"center",alignContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:9}}>&nbsp;&nbsp;&nbsp;  Prescription</Text>
                </View>
            </Right>
          </CardItem>
        </Card>
        </TouchableOpacity>
  );
};
}

export default withNavigation(card)
