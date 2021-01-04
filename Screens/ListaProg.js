
import React, { Component, useState } from "react";
import {View, Dimensions, FlatList} from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab, Form, Item, Input, Label, Picker, Textarea} from "native-base";




export default function ListaProg({navigation}) {
    const [selected2, onValueChange2]=useState();
    const [selected3, onValueChange3]=useState();


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

    return (


      <View style={{height:'90%', flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>




<FlatList
             data={programari}
             renderItem={({ item }) => (
                  <Card style={{marginBottom:'10%'}}>
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
          </Card>
          
             )}
            />

          

        
<View style={{justifyContent:'flex-end', flex:1, marginTop:'-10%'}}>
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
