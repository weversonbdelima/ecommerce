import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    shoppingCartProducts: {
        height: '80%'
    },
    card:{
        backgroundColor: '#fff',
        marginBottom: 40
    },
    shoppingCartDetails:{
        backgroundColor: '#760DF4'
        
    },
    titleText:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        color: '#760DF4',
        marginTop: 10
      },
      textCartDetails:{
        fontSize: 24,
        fontWeight: "bold",
        color: '#fff',
        marginTop: 10
      },
      buttonGroup:{
          display:"flex",
          flexDirection: "row",
          justifyContent: 'space-between',
      }

    
  });

export default styles;