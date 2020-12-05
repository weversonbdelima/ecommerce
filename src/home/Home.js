import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

import Products from '../products.json'
import Product from '../Product/Product'

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            cart: [],
            totalPrice: 0
        }
    }

    addProductCart(product){
        //Carrinho auxiliar recebe carrinho.
        let cartAux = this.state.cart.slice();
        let productAux = [];
        let index = 0;
        //Verifica se existe algum elemento correspondente no carrinho
        if(!this.searchCart(cartAux, product)){
            //Se não existir elemento, insere no carrinho.
            product.quantity = 1;
            //Calcula o preço subtotal do produto
            product.priceSubTotal = product.price;
            cartAux.push(product);
        }else{
            //Caso exista elemento no carrinho, incrementa quantidade do elemento.
            index = cartAux.indexOf(product);
            productAux = cartAux[index];
            productAux.quantity += 1;
            //Calcula o preço subtotal do produto
            productAux.priceSubTotal = this.calculatorSubTotalPrice(productAux);
            cartAux[index] = productAux;
        }
        //Calcula o preço total dos items do carrinho
        this.calculatorTotalPrice(product);
        //Salva o carrinho com os dados atualizados
        this.setState({
            cart: cartAux
        });
    }

    calculatorSubTotalPrice(product){
        return (product.price * product.quantity);
    }

    calculatorTotalPrice(product){
        let totalPriceAux = this.state.totalPrice;
        totalPriceAux += product.price;
        //Salva o preço total com os dados atualizados.
        this.setState({
            totalPrice: totalPriceAux
        });        
    }

    searchCart(cart, product){
        if(cart.find(productCart => productCart.id === product.id) === undefined){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return(
            
            <View>
                <Button
                    title="Shopping Cart"
                    onPress={ () => this.props.navigation.navigate('Checkout', {cart: this.state.cart, totalPrice: this.state.totalPrice})}
                /> 
                <Text>Product</Text>
                <ScrollView>
                    <View>
                        {Products.map(product => 
                            <View>
                                <Product product={product}/>
                                <Button
                                    title="Add to cart"
                                    onPress={()=>this.addProductCart(product)}
                                />
                            </View>
                        )}
                       
                    </View>
                </ScrollView>  
            </View>
        );
    }
}