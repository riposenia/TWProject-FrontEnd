
import React, { Component, useState } from "react";
import {View, Dimensions} from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab, Form, Item, Input, Label, Picker, Textarea } from "native-base";




export default function Formular({navigation}) {
    const [selected2, onValueChange2]=useState();
    const [selected3, onValueChange3]=useState();
    return (


      <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>

          

        <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>
          <Form>
            
            
            
            <Item floatingLabel style={{marginRight:'5%', marginLeft:'5%'}}>
              <Label style={{color:"black"}}>Nume</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{marginRight:'5%', marginLeft:'5%'}}>
              <Label style={{color:"black"}}>Prenume</Label>
              <Input />
            </Item>

            
            <Item style={{marginTop:'5%'}}>
            <Textarea rowSpan={6} style={{width:'95%'}} placeholderTextColor="black" placeholder="Descrie simptomele" />
          </Item>
            
            <Item picker style={{width:'90%', marginRight:'5%', marginLeft:'5%', marginTop:'5%', alignSelf:"center"}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                
                placeholder="Alege doctorul"
                placeholderStyle={{ color: "black" }}
                placeholderIconColor="#007aff"
                selectedValue={selected2}
                onValueChange={onValueChange2.bind(this)}
              >
                <Picker.Item label="Dr. Dumitru (ORL) " value="key0" />
                <Picker.Item label="Dr. Popescu (ORL)" value="key1" />
                <Picker.Item label="Dr. Danila (RMN)" value="key2" />
                <Picker.Item label="Dr. Altmayer (CARDIOLOGIE)" value="key3" />
                <Picker.Item label="Dr. Popescu (ORTOPEDIE)" value="key4" />
              </Picker>
            </Item>

            
            <Item picker style={{width:'90%', marginRight:'5%', marginLeft:'5%', marginTop:'5%', alignSelf:'center'}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                
                placeholder="Alege ora"
                placeholderStyle={{ color: "black" }}
                placeholderIconColor="#007aff"
                selectedValue={selected3}
                onValueChange={onValueChange3.bind(this)}
              >
                <Picker.Item label="13:00" value="key0" />
                <Picker.Item label="14:00" value="key1" />
                <Picker.Item label="15:00" value="key2" />
              </Picker>
            </Item>


          <Button rounded style={{marginTop:'10%' , width:'80%', alignSelf:'center', justifyContent:'center', backgroundColor:"red", borderWidth:2, borderColor:'red'}}>
              <Icon name="send" style={{fontSize: 30, color: 'white'}} />
              <Text style={{color:'white'}}>Trimite programare</Text>
            </Button>
            
          </Form>
          </View>

          <View style={{justifyContent:'flex-end', flex:1}}>
        <Footer style={{backgroundColor:"white"}} >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button vertical onPress={()=>navigation.navigate("HomePacient")}>
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
