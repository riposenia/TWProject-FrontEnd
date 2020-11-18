
import React, { Component, useState } from "react";
import {View, Dimensions} from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right , Card, CardItem,Body, Text , Footer, FooterTab, Form, Item, Input, Label, Picker, Textarea } from "native-base";




export default function Formular() {
    const [selected2, onValueChange2]=useState();
    const [selected3, onValueChange3]=useState();
    return (


      <View style={{height:Dimensions.get("window").height, flexDirection:'column', flex:1, width:Dimensions.get("window").width}}>

          

        

        <View style={{justifyContent:'flex-end', flex:1}}>
        <Footer style={{backgroundColor:"white"}} >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button vertical>
              <Icon name="home" style={{fontSize: 30, color: 'red'}} />
              <Text style={{color:"red"}}>Home</Text>
            </Button>
          
            <Button vertical>
              <Icon name="person" style={{fontSize: 30, color: 'red'}}/>
              <Text style={{color:"red"}}>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
        </View>


      </View>
    );
  }
