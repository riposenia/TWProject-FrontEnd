import React from 'react';

import {View, Dimensions, Image} from 'react-native';

import {Button, Text, Form, Item, ListItem, Right, Left,Input,Radio, Label} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



export default function Register({navigation})
{

    return(

        <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, flex:1, flexDirection:'column', alignItems:'center'}}>


<Image source={require('../images/doctor_login.png')} 
        style={{ marginTop:'5%' ,height:Dimensions.get('window').height/8, width:Dimensions.get('window').width/4}} resizeMode='contain' /> 


        
            
            <ScrollView style={{width:'90%', marginLeft:'25%', marginRight:'25%', marginTop:'10%', borderWidth:3, borderColor:'red', borderRadius:20}}
            >
            <Form style={{marginLeft:'10%', width:'70%'}}>
            <Item floatingLabel>
              <Label style={{textAlign:'center'}}>Username</Label>
              <Input style={{textAlign:'center'}} />
            </Item>

            <Item floatingLabel last>
              <Label style={{textAlign:'center'}}>Email</Label>
              <Input style={{textAlign:'center'}} />
            </Item>



            <Item floatingLabel last>
              <Label style={{textAlign:'center'}}>Password</Label>
              <Input style={{textAlign:'center'}} />
            </Item>


            <Item floatingLabel last>
              <Label style={{textAlign:'center'}}>Confirm Password</Label>
              <Input style={{textAlign:'center'}} />
            </Item>


          </Form> 


          </ScrollView>


            <View style={{marginTop:'10%'}}>
            <Button rounded style={{marginBottom:'10%', width:Dimensions.get('window').width/1.5, justifyContent:'center', backgroundColor:'white', borderWidth:1, borderColor:'red'}} ><Text style={{fontSize:20, color:'red'}}>Sign Up</Text></Button>    
            </View>
            


        </View>


    );
}