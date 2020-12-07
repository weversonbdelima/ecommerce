import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import styles from './styles';
import cart from '../Classes/Cart'


export default class Product extends Component{

        constructor(props){
            super(props);
        }

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

        purchaseProduct(product){
            //Adiciona o produto ao carrinho
            cart.setProducts(product);
            //Redirenciona para a rota de checkout
            this.props.navigation.navigate('Checkout');
            
        }

        loadButtonGroup(){
            if(!this.props.cart){
                return (  <View style={styles.buttonGroup}>
                    <View style={{marginRight: 20}}>
                    <Button
                        color="#760DF4"
                        title="Add to cart"
                        onPress={()=> cart.setProducts(this.props.product)}
                    />         
                    </View>              
                    <Button
                        color="#760DF4"
                        title="Purchase"
                        onPress={()=>this.purchaseProduct(this.props.product)}
                    />                           
                </View>);
            }else{
                return;
            }
        }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image style={styles.image} source={this.loadImage(this.props.product)}/>
                    <View style={styles.card}>        
                            <Text style={styles.text}>{this.props.product.name}</Text>
                            <Text style={styles.text}>Price: {this.props.product.price}</Text>
                            <Text style={styles.text}>Score: {this.props.product.score}</Text>            
                    </View>
                </View>
                    {this.loadButtonGroup()}
                  
               
            </View>
        );
    }


    
}