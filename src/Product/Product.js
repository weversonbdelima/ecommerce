import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import ProductList from '../products.json'
import styles from './styles';
import ShoppingCart from '../ShoppingCart/ShoppingCart'


export default class Product extends Component{



    render(){
        return(

            <View style={styles.card}>
                <Text>{this.props.product.name}</Text>
                <Text>{this.props.product.price}</Text>
                <Text>{this.props.product.score}</Text>
            </View>
        );
    }


    
}