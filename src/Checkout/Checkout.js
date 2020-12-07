import React from 'react';
import { View, ScrollView, TextInput,Picker, Button, Text} from 'react-native';

import styles from './styles'

import Product from '../Product/Product'

import cart from '../Classes/Cart'

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: cart.getProducts(),
            totalPrice: cart.getTotalPrice(),
            shipping: cart.getShipping()
        }
    }

    componentDidMount(){

        this.setState({
            totalPrice: cart.getTotalPrice(),
            shipping: cart.getShipping()
        })


        //Calcula o preço subtotal dos produtos ao montar o component checkout.
        this.calculatorSubTotalPrice();

    }

    calculatorSubTotalPrice(){
        //Produto auxiliar recebe uma cópia de produtos
        let cartAux = this.state.cart.slice();
        cartAux.map(product => {
            product.subTotalPrice = product.quantity * product.price;
        })
        //Atualiza o carrinho com os produtos atualizados
        this.setState({
            cart: cartAux
        })
    }

    onPressRemoveProduct(product){
        //Remove o produto do carrinho
        cart.removeProduct(product);
        //Atualiza os estados
        this.updateDataCheckout();
        
    }


    onPressAddQuantityProduct(product){
        //Incrementa quantidade
        cart.addQuantity(product);
        //Atualiza os estados
        this.updateDataCheckout();
        
    }
    onPressSubQuantityProduct(product){
        //Incrementa quantidade
        cart.subQuantity(product);
        //Atualiza os estados
        this.updateDataCheckout();
        
    }

    updateDataCheckout(){
        //Atualiza os estados do component
        this.setState({
            cart: cart.getProducts(),
            totalPrice: cart.getTotalPrice(),
            shipping: cart.getShipping()
        })
    }

    loadCart(){
        if(this.state.cart.length === 0){
            return (
                <Text style={styles.text}>Shoppig cart is empty</Text>
            );
        }else{
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <ScrollView style={styles.shoppingCartProducts}>
                        {this.state.cart.map(product => 
                            <View style={styles.card}>
                            <Product product={product} cart={true}/>
                            <Text style={styles.text}>Quantity: {product.quantity}</Text>
                            <Text style={styles.text}>Subtotal price: {product.priceSubTotal}</Text>
                            
                            <View style={styles.buttonGroup}>
                                <Button
                                    color="#760DF4"
                                    title="Add quantity"
                                    onPress={()=>this.onPressAddQuantityProduct(product)}
                                />  
                                <Button
                                    color="#760DF4"
                                    title="Sub quantity"
                                    onPress={()=>this.onPressSubQuantityProduct(product)}
                                />  
                                <Button
                                    color="#760DF4"
                                    title="Delete to cart"
                                    onPress={()=>this.onPressRemoveProduct(product)}
                                />                                    
                                </View>
                            </View>
                        )}
                    </ScrollView>
                    <View style={styles.shoppingCartDetails}>
                        <Text style={styles.textCartDetails}>Shopping details</Text>
                        <Text style={styles.textCartDetails}>Total price: {this.state.totalPrice}</Text>
                        <Text style={styles.textCartDetails}>Shipping: {this.state.shipping}</Text>
                    </View>
                </View>
            )
        }
    }

    render(){
        return(
            <View> 
                    {this.loadCart()}
            </View>
        )
    }








}

export default Checkout;