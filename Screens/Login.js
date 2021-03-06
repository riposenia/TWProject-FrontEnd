import React from 'react';

import {View, Dimensions, Image} from 'react-native';

import {Button, Text, Form, Item, Input, Label} from 'native-base';
import { useState } from 'react';



export default function Login({navigation})
{

  const[tipUser, changeTipUser] = useState();

  function validateLogin()
  {
    if(tipUser==='asistenta')
    {
      navigation.navigate('HomeAsistenta')
    }
    else if(tipUser==='doctor')
    {
      navigation.navigate('HomeDoctor')
    }
    else if(tipUser==='pacient')
    {
      navigation.navigate('HomePacient')
    }
  }

    return(

        <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, flex:1, flexDirection:'column', alignItems:'center'}}>


<Image source={require('../images/doctor_login.png')} 
        style={{ marginTop:'20%' ,height:Dimensions.get('window').height/8, width:Dimensions.get('window').width/4}} resizeMode='contain' /> 


        


            <Form style={{marginTop:'20%', width:'70%'}}>
            <Item floatingLabel>
              <Label style={{textAlign:'center'}}>Username</Label>
              <Input style={{textAlign:'center'}} />
            </Item>
            <Item floatingLabel >
              <Label style={{textAlign:'center'}}>Password</Label>
              <Input style={{textAlign:'center'}} />
            </Item>
            <Item floatingLabel last>
              <Label style={{textAlign:'center'}}>Tip User</Label>
              <Input onChangeText={ tip => changeTipUser(tip)}  style={{textAlign:'center'}} />
            </Item>
          </Form> 



            <View style={{marginTop:'40%'}}>
            <Button rounded onPress={()=>validateLogin()} style={{marginBottom:'10%', width:Dimensions.get('window').width/1.5, justifyContent:'center', backgroundColor:'white', borderWidth:1, borderColor:'red'}} ><Text style={{fontSize:20, color:'red'}}>Login</Text></Button>    
            </View>
            


        </View>


    );
}