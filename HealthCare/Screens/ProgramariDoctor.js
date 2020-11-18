import React, { useState } from 'react';
import {Dimensions, View, Image,FlatList} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { BottomNavigation } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';

export default function GestioneazaPacienti({navigation}){
    const [pacienti, setPacienti] = useState([
    {key:'1',firstName: 'Elson', lastName: 'Correia', info: {ora: 12}},
    {key:'2',firstName: 'John', lastName: 'Doe', info: {ora: 11}},
    {key:'3',firstName: 'Jane', lastName: 'Doe', info: {ora: 12}},
    {key:'4',firstName: 'Maria', lastName: 'Carvalho', info: {ora: 11}},
    {key:'5',firstName: 'Kelly', lastName: 'Correia', info:{ora: 11}},
    {key:'6',firstName: 'Don', lastName: 'Quichote', info: {ora: 11}},
    {key:'7',firstName: 'Marcus', lastName: 'Correia', info: {ora: 10}},
    {key:'8',firstName: 'Bruno', lastName: 'Gonzales', info: {ora: 9}},
    {key:'9',firstName: 'Alonzo', lastName: 'Correia', info: {ora: 8}},
    {key:'10',firstName: 'Alonzo', lastName: 'Correia', info: {ora: 7}}
    ]);
    return(
        <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>
            <FlatList
             data={pacienti}
             renderItem={({ item }) => (
                  <Card>
            <CardItem>
              <Body>
                <Text>
                   Nume: {item.lastName}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   Prenume: {item.firstName}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   Ora: {item.info.ora}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button bordered style={{marginTop:'5%' ,marginBottom:'5%', width:'90%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:3, borderColor:'red'}} onPress={()=>navigation.navigate('Consulta')} >
                    <Icon name="information-circle" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Consulta</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          
             )}
            />
        
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
        
    );
}