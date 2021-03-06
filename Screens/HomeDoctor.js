import React, { Component } from "react";
import {Dimensions, View, Image} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { BottomNavigation } from "react-native-paper";
export default function HomeDoctor({navigation}) {
    return (

      
      <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>


<Card style={{marginTop:'15%'}}>
          <CardItem style={{alignSelf:"center"}}>
              <Image source={require("../images/people.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            </CardItem>

            <CardItem bordered style={{ position:'relative'}}>
              <Body>
                <Text style={{alignSelf:"center"}}>
                  Pentru a vedea prograrile curente apasa butonul de mai jos.
                  
                </Text>
               

            <Button rounded style={{marginTop:'5%' , width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:2, borderColor:'red'}} onPress={()=>navigation.navigate('ProgramariDoctor')}>
              <Icon name="paper" style={{fontSize: 30, color: 'red'}} />
              <Text style={{color:'red'}}>Pacienti programati</Text>
            </Button>
              </Body>
            </CardItem>


            
          </Card>


          <Card style={{marginTop:'15%'}}>

          <CardItem style={{alignSelf:"center"}}>
              <Image source={require("../images/arhiva.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            </CardItem>
            <CardItem bordered style={{ position:'relative'}}>
              <Body>
                <Text style={{alignSelf:"center"}}>
                  Pentru a vedea pacientii consultati de-a lungul timpului apasa butonul de mai jos.
                  
                </Text>
                <Button rounded style={{marginTop:'5%' ,width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"red"}} >
              <Icon name="medkit" style={{fontSize: 30, color: 'white'}} />
              <Text>Arhiva</Text>
            </Button>

              </Body>
            </CardItem>
          </Card>
          
          

        <View style={{justifyContent:'flex-end', flex:1}}>
        <Footer style={{backgroundColor:"white"}} >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button vertical onPress={()=>navigation.navigate("HomeDoctor")}>
              <Icon name="home" style={{fontSize: 30, color: 'red'}} />
              <Text style={{color:"red"}}>Home</Text>
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
