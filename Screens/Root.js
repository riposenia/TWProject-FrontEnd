import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Button, Text} from 'native-base'; 

export default function Root({navigation})
{

    return(


        <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, flex:1, flexDirection:'column',alignItems:'center'}}>
        


        <Image source={require('../images/logo.png')} 
        style={{ marginTop:"10%" ,height:Dimensions.get('window').height/4, width:Dimensions.get('window').width/2}} resizeMode='cover' /> 



        <View style={{paddingTop:170}} > 
        <Button rounded style={{marginBottom:'10%', width:Dimensions.get('window').width/1.5, justifyContent:'center', backgroundColor:'red'}} onPress={()=>navigation.navigate("Register")} ><Text style={{fontSize:20}}>Sign Up</Text></Button>
        <Button rounded style={{marginBottom:'10%', width:Dimensions.get('window').width/1.5, justifyContent:'center', backgroundColor:'white', borderWidth:1, borderColor:'red'}} onPress={()=>navigation.navigate("Login")} ><Text style={{color:'red', fontSize:20}}>Login</Text></Button>
        </View>


        </View>



    );

}