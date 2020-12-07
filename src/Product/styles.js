import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff'
    },
    product:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 10,
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 10
    },
    text:{
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#760DF4'
    },
    image: {
      width: 100,
      height: 100,
    },

    textTitle:{
        fontSize: 18,
    },
    button: {
        width: 120,
        height: 40,
    },
    buttonGroup:{
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'flex-end',
      marginTop: 20
    },
  });

export default styles;