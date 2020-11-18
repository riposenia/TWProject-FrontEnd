import React, { Component } from "react";
import {Dimensions, View, Image} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab, Input, Textarea} from "native-base";
import { BottomNavigation } from "react-native-paper";
export default function Consulta({navigation}) {
    const Simptome = 'Simptomele pacientului sunt de aici';
    const Numele = 'Golban se ia de la progrmare';
    return (

      
      <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>


          <Card>
              <CardItem><Text>Nume pacient: {Numele}</Text></CardItem>
          
              <CardItem><Text>Simptome pacient:{'\n'}
              {Simptome}
              </Text>
              </CardItem>
          </Card>
          <Card>
              <CardItem><Text>Diagnostic:</Text></CardItem>
              <CardItem>
              <Textarea rowSpan={6} style={{width:'95%'}} placeholderTextColor="black" placeholder="Scrie diagnostic" />
              </CardItem>
              
              
          </Card>

          <Card>
          
              <CardItem>
              <Button vertical style={{marginTop:'5%' , width:'100%', alignSelf:'center', justifyContent:'center',backgroundColor:"white", borderWidth:2, borderColor:'red'}}>
              <Icon name="checkbox" style={{fontSize: 30, color: 'red'}}/>
              <Text style={{color:"red"}}>Finalizeaza consultatia</Text>
            </Button>
              </CardItem>

              <CardItem>
              <Button vertical style={{marginTop:'5%' , width:'100%', alignSelf:'center', justifyContent:'center',backgroundColor:"white", borderWidth:2, borderColor:'red'}}>
              <Icon name="document" style={{fontSize: 30, color: 'red'}}/>
              <Text style={{color:"red"}}>Eliberare fisa</Text>
            </Button>
              </CardItem>

              <CardItem>
              <Button vertical style={{marginTop:'5%' , width:'100%', alignSelf:'center', justifyContent:'center',backgroundColor:"white", borderWidth:2, borderColor:'red'}}>
              <Icon name="create" style={{fontSize: 30, color: 'red'}}/>
              <Text style={{color:"red"}}>Trimitere la doctor</Text>
            </Button>
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
