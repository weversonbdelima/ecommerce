import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import Product from '../Product/Product'

export default class ShoppingCart extends Component{

    constructor(props){
        super(props)
        this.state ={
            cart: this.props.route.params.cart,
            totalPrice: this.props.route.params.totalPrice
        }
    }


    removeProductCart(product){
         //Carrinho auxiliar recebe carrinho.
         let cartAux = this.state.cart.slice();
         let index = 0;
 
         //Verifica se existe produtos no carrinho
         if(cartAux.length === 0){
             //Não existe produtos dentro do carrinho
             console.log('testea ')
         }else{
            //Caso exista produtos no carrinho, e realizado a busca do produto e consequentemente sua remoção.
            index = cartAux.indexOf(product);
            cartAux.splice(index, 1);
         }
           //Salva o carrinho com os dados atualizados
         this.setState({
            cart: cartAux
         });               
    }
       
    render(){
        
        return(
            <View>
             <ScrollView>
                    <View>
                        {this.state.cart.map(product => 
                            <View>
                                <Product product={product}/>
                                <Text>{product.priceSubTotal}</Text>
                                <Button
                                    title="Remove product"
                                    onPress={()=>this.removeProductCart(product)}
                                />
                               
                            </View>
                        )}
                       
                    </View>
                </ScrollView>
                <View>
                     <Text>{this.state.totalPrice}</Text>
                </View>  
            </View>
        )
    }


    
}