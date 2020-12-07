import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    header:{
      backgroundColor: "#760DF4",
      padding: 10,
      
    },
    titleText:{
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff'
    },
    textInput: {
      borderRadius: 7,
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderWidth: 1,
      padding: 10,
      marginTop: 20,
      marginBottom: 20
    },
    text:{
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 20
    },
    selected:{
      backgroundColor: '#fff',
    },
    card:{
      width: "90%",
      borderColor: "grey",
      marginTop: 20,
      marginBottom: 60,
      shadowColor: 'grey',
      shadowRadius: 2,
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    container:{
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: 10,
      height: '70%'
    },
    image:{
      width: 60,
      height: 60
    },
   
   
    picker:{
      backgroundColor: "#fff",
      borderColor: "#fff",
    },
    
  
    footer:{
      backgroundColor: "#760DF4",
      height: 40
    }
  });

export default styles;