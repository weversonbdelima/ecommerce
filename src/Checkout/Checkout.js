import React from 'react';
import { View, ScrollView, TextInput,Picker, Button, Text} from 'react-native';

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

    //New
    onPressRemoveProduct(product){
        //Remove o produto do carrinho
        cart.removeProduct(product);
        this.setState({
            cart: cart.getProducts()
        })
    }


    render(){
        return(
            <View>
                <ScrollView>
                        <View>
                            {this.state.cart.map(product => 
                                    <View>
                                    <Product product={product}/>
                                    <Text>{product.quantity}</Text>
                                    <Text>{product.priceSubTotal}</Text>
                                    <Button
                                        title="Add quantity"
                                        onPress={()=>cart.addQuantity(product)}
                                    />  
                                     <Button
                                        title="Sub quantity"
                                        onPress={()=>cart.subQuantity(product)}
                                    />  
                                    <Button
                                        title="Delete to cart"
                                        onPress={()=>this.onPressRemoveProduct(product)}
                                    />                                    
                                    </View>
                            )}
                        </View>
                </ScrollView>
                    <View>
                        <Text>Shopping details</Text>
                        <Text>{this.state.totalPrice}</Text>
                        <Text>{this.state.shipping}</Text>
                    </View>
            </View>
        )
    }








}

export default Checkout;