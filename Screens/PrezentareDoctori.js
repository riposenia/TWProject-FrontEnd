import React, { Component } from "react";
import {Dimensions, View, Image} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { BottomNavigation } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
export default function PrezentareDoctori({navigation}) {
    return (


        <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>

     
      <ScrollView style={{height:'90%', flexDirection:'column', width:Dimensions.get("window").width}}>


        
        <Card style={{marginTop:'8%'}}>
          
          <CardItem style={{alignSelf:"left"}}>
            <Image source={require("../images/doctor1.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            <Body>
              <Text style={{alignSelf:"left"}}>
                Nume: Boanta Razvan
                
                </Text>
             <Text style={{alignSelf:"left"}}>
                Specializare: ORL
                </Text>
            </Body>
          </CardItem>

          
          </Card>


            <Card style={{marginTop:'8%'}}>
          
          <CardItem style={{alignSelf:"left"}}>
            <Image source={require("../images/doctor2.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            <Body>
              <Text style={{alignSelf:"left"}}>
              Nume: Golban Cristina
              
                </Text>
                <Text style={{alignSelf:"left"}}>
                Specializare: Urologie
                </Text>
            </Body>
          </CardItem>

          </Card>

          <Card style={{marginTop:'8%'}}>
          
          <CardItem style={{alignSelf:"left"}}>
            <Image source={require("../images/doctor3.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            <Body>
              <Text style={{alignSelf:"left"}}>
              Nume: Cernaianu Iasmina    
              
                </Text>
                <Text style={{alignSelf:"left"}}>
                Specializare: Oftalmologie
                </Text>
            </Body>
          </CardItem>

          </Card>

          

        <Card style={{marginTop:'8%'}}>
          
          <CardItem style={{alignSelf:"left"}}>
            <Image source={require("../images/doctor4.png")} style={{ width:Dimensions.get("window").width/2, height:Dimensions.get("window").height/8}} resizeMode="contain"/> 
            <Body>
              <Text style={{alignSelf:"left"}}>
              Nume: Avarvarei Ciprian
              
                </Text>
                <Text style={{alignSelf:"left"}}>
                Specializare: Endocrinologie 
                </Text>
            </Body>
          </CardItem>

          </Card>
          
          

        <View style={{justifyContent:'flex-end', flex:1, position:"absolute"}}>
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