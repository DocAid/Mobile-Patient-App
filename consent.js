import * as React from 'react';
import {Text,TextInput,View, StyleSheet, ToastAndroid, TouchableOpacity} from 'react-native'
import {Button, Icon, CheckBox } from 'react-native-elements'
import {Content, Header, Container} from 'native-base'

class App extends React.Component {
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
           <Text style={{color:'#fff',fontFamily:'Roboto',fontSize:22}}>Consent Form</Text>
        ),
        headerLeft: (
            <View style={{ paddingLeft: 19 }}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.goBack()
              }}><Icon type="font-awesome" name="arrow-left" color={'#fff'}></Icon></TouchableOpacity>
              </View>
        ),
    });

    state = {
        checked:false
    }

render() {
  return (
          <Container>
              <Content>
                  <View style={{width:300,alignSelf:'center'}}>
    <Text>{'\n'}All patients have regular interactions with a doctor, to discuss their work. In
order to help the quality of the treatment, we ask for your permission to record our
sessions. This is so that the doctor and you can talk about ideas and ways of working that might be
helpful for you. In addition to this, small parts of the recordings may be transcribed/written down
and used for work towards training and analysis. If this were the case, all names and any factors which may
identify you would not be included, so confidentiality would be maintained. All recordings
would be destroyed after the work was completed.
Please read the following paragraphs and, if you are in agreement, please check the checkbox where indicated.{'\n\n'}
1) I consent to the sessions being tape-recorded and these tapes being used with the
therapist’s supervisor in order to help our work.{'\n\n'}

2) I consent to small parts of the tapes being used for work towards the therapist’s and the computers training
training. I understand that part of any conversation that is written down would be kept
anonymous.{'\n\n'}

I understand that, in respect of all tape recordings made, they will only be used for the purposes of
supervision or towards work for training as stated above. Every effort will be made to ensure
confidentiality.
{'\n'}</Text>
</View>
<CheckBox
  title='I agree'
  checked={this.state.checked}
  onPress={() => this.setState({checked: !this.state.checked})}
/><Text></Text>
<View style={{width:250,alignSelf:'center'}}>
    <Button title="Sign Up" onPress={()=>{
        if(this.state.checked){
        ToastAndroid.show("Patient added!",ToastAndroid.SHORT)
        this.props.navigation.navigate('home',{ pid:this.props.navigation.getParam('pid', "hello123")})
        }
        else
        {
            ToastAndroid.show("Please agree to consent",ToastAndroid.SHORT)
        }
    }}></Button>
    <Text></Text>
    </View>
    </Content>
    </Container>
  );
}
};

export default App