import React from 'react';
import {Dimensions, View, Image} from "react-native"; 
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab} from "native-base";
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeAsistenta({navigation}){
    return(
        <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>
            <Card style={{marginTop:'20%'}}>
            <CardItem>
              <Body>
                <Button bordered style={{marginTop:'20%' , width:'90%', alignSelf:'center', justifyContent:'left', backgroundColor:"white", borderWidth:3, borderColor:'red'}}>
                    <Icon name="cash" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Gestioneaza contabilitatea</Text>
                </Button>
                 <Button bordered style={{marginTop:'10%', width:'90%', alignSelf:'center', justifyContent:'left', backgroundColor:"white", borderWidth:3, borderColor:'red'}} onPress={()=>navigation.navigate("GestioneazaPacienti")}>
                    <Icon name="medkit" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Gestioneaza pacienti</Text>
                </Button>
                 <Button bordered style={{marginTop:'10%' ,marginBottom:'20%', width:'90%', alignSelf:'center', justifyContent:'left', backgroundColor:"white", borderWidth:3, borderColor:'red'}} onPress={()=>navigation.navigate("GestioneazaProgramari")} >
                    <Icon name="document" style={{fontSize: 30, color: 'red'}} />
                    <Text style={{color:'red'}}>Gestioneaza programari</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        
        <View style={{justifyContent:'flex-end', flex:1}}>
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

        </View>
        
    );
}