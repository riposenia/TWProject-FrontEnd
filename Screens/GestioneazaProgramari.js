import React, { useState } from 'react';
import {Dimensions, View, Image,FlatList} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { BottomNavigation } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';

export default function GestioneazaProgrmari({navigation}){
     const [programari, setProgramari] = useState([
    {key:'1',ora: '13.00', doctor: 'Correia'},
    {key:'2',ora: '13.00', doctor: 'Correia'},
    {key:'3',ora: '13.00', doctor: 'Correia'},
    {key:'4',ora: '13.00', doctor: 'Correia'},
    {key:'5',ora: '13.00', doctor: 'Correia'},
    {key:'6',ora: '13.00', doctor: 'Correia'},
    {key:'7',ora: '13.00', doctor: 'Correia'},
    {key:'8',ora: '13.00', doctor: 'Correia'},
    {key:'9',ora: '13.00', doctor: 'Correia'}
    ]);
    return(
        <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>
        <FlatList
             data={programari}
             renderItem={({ item }) => (
                  <Card>
            <CardItem>
              <Body>
                <Text>
                   Ora: {item.ora}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   Doctor: {item.doctor}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button bordered style={{marginTop:'5%', width:'90%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:3, borderColor:'red'}} >
                    <Icon name="close-circle" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Anuleaza programare</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button bordered style={{marginTop:'5%' ,marginBottom:'5%', width:'90%', alignSelf:'center', justifyContent:'center', backgroundColor:"white", borderWidth:3, borderColor:'red'}} >
                    <Icon name="paper-plane" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Trimite programare</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          
             )}
            />
        
        <Footer style={{backgroundColor:"white"}} >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button vertical onPress={()=>navigation.navigate("HomeAsistenta")}>
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