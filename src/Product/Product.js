import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import ProductList from '../products.json'
import styles from './styles';


export default class Product extends Component{

        //Pré carregamento de imagens do repositório local.
        loadImage(product){
            switch (product.image) {
                case "super-mario-odyssey.png":
                    return require('../assets/super-mario-odyssey.png')
                    break;
                case "call-of-duty-infinite-warfare.png":
                    return require('../assets/call-of-duty-infinite-warfare.png')
                    break;
                case "the-witcher-iii-wild-hunt.png":
                    return require('../assets/the-witcher-iii-wild-hunt.png')
                    break;
                case "call-of-duty-wwii.png":
                    return require('../assets/call-of-duty-wwii.png')
                    break;
                case "mortal-kombat-xl.png":
                    return require('../assets/mortal-kombat-xl.png')
                    break;
                case "shards-of-darkness.png":
                    return require('../assets/shards-of-darkness.png')
                    break;
                case "terra-media-sombras-de-mordor.png":
                    return require('../assets/terra-media-sombras-de-mordor.png')
                    break;
                case "fifa-18.png":
                    return require('../assets/fifa-18.png')
                    break;
                case "horizon-zero-dawn.png":
                    return require('../assets/horizon-zero-dawn.png')
                    break;
            }
        }

    render(){
        return(

            <View style={styles.card}>
                <Image style={styles.stretch} source={this.loadImage(this.props.product)}/>
                <Text>{this.props.product.name}</Text>
                <Text>{this.props.product.price}</Text>
                <Text>{this.props.product.score}</Text>
            </View>
        );
    }


    
}