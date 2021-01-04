import React, { Component } from "react";
import {Dimensions, View, Image} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { BottomNavigation } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
export default function HomePacient({navigation}) {
    return (

      
      <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>
   
      <ScrollView style={{height:'90%', flexDirection:'column', width:Dimensions.get("window").width}}>


        
        <Card style={{marginTop:'5%'}}>
          <CardItem style={{alignSelf:"center"}}>
              <Image source={require("../images/programari.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            </CardItem>

            <CardItem bordered style={{ position:'relative'}}>
              <Body>
                <Text style={{alignSelf:"center"}}>
                  Pentru a vedea programarile tale apasa butonul de mai jos.
                  
                </Text>
               

            <Button rounded onPress={()=>navigation.navigate('ListaProg')} style={{marginTop:'5%' , width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:2, borderColor:'red'}}>
              <Icon name="paper" style={{fontSize: 30, color: 'red'}} />
              <Text style={{color:'red'}}>Lista programari</Text>
            </Button>
              </Body>
            </CardItem>


            
          </Card>


          <Card style={{marginTop:'5%'}}>

          <CardItem style={{alignSelf:"center"}}>
              <Image source={require("../images/rezultate.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            </CardItem>
            <CardItem bordered style={{ position:'relative'}}>
              <Body>
                <Text style={{alignSelf:"center"}}>
                  Pentru rezultate apasa butonul de mai jos.
                  
                </Text>
                <Button rounded style={{marginTop:'5%' ,width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"red"}}>
              <Icon name="medkit" style={{fontSize: 30, color: 'white'}} />
              <Text>Lista rezultate</Text>
            </Button>

              </Body>
            </CardItem>
          </Card>



          <Card style={{marginTop:'5%', marginBottom:'15%'}}>

<CardItem style={{alignSelf:"center"}}>
    <Image source={require("../images/prez.jpeg")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
  </CardItem>
  <CardItem bordered style={{ position:'relative'}}>
    <Body>
      <Text style={{alignSelf:"center"}}>
        Pentru a vedea o scurta prezentare a doctorilor, apasa butonul de mai jos.
        
      </Text>
      <Button rounded onPress={()=> navigation.navigate('PrezentareDoctori')}  style={{marginTop:'5%' , width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:2, borderColor:'red'}}>
    <Icon name="paper"  style={{fontSize: 30, color: 'red'}}  />
    <Text style={{color:'red'}}>Prezentare doctori</Text>
  </Button>

    </Body>
  </CardItem>
</Card>


          
          
          


      </ScrollView>

      
<View style={{justifyContent:'flex-end', flex:1}}>
<Footer style={{backgroundColor:"white"}} >
  <FooterTab style={{backgroundColor:"white"}}>
    <Button vertical onPress={()=>navigation.navigate("HomePacient")}>
      <Icon name="home" style={{fontSize: 30, color: 'red'}} />
      <Text style={{color:"red"}}>Home</Text>
    </Button>
    <Button vertical onPress={()=>navigation.navigate("Formular")}>
      <Icon name="pulse" style={{fontSize: 30, color: 'red'}} />
      <Text style={{color:"red"}}>Programeaza-te</Text>
    </Button>
    
    <Button vertical onPress={()=>navigation.navigate("Root")}>
      <Icon name="person" style={{fontSize: 30, color: 'red'}}/>
      <Text style={{color:"red"}}>Logout</Text>
    </Button>
  </FooterTab>
</Footer>
</View>

</View>

     
    );
  }
