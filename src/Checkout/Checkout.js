import React from 'react';
import { View, ScrollView, TextInput,Picker, Button, Text} from 'react-native';

import Product from '../Product/Product'

class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: this.props.route.params.cart,
            totalPrice: 0,
            shipping: 0
        }
    }

    componentWillMount(){

        this.calculatorSubTotalPrice();
        // //Calcula o preço total dos produtos do carrinho.
        // this.calculatorTotalPrice();
        // //Calcula o preço do frete
        // this.calculatorShippping();
    }

    calculatorSubTotalPrice(){
        //Produto auxiliar recebe uma cópia de produtos
        let cartAux = this.state.cart.slice();
        cartAux.map(product => {
            product.subTotalPrice = product.quantity * product.price;
        })
        console.log(cartAux);
    }



    // calculatorTotalPrice(){
    //     //Carrinho auxiliar recebe uma cópia de carrinho.
    //     let cartAux = this.state.cart.slice();
    //     let totalPriceAux = 0;
    //     //Soma o subtotal dos produtos do carrinho.
    //     cartAux.map(product => {
    //         totalPriceAux += product.subTotalPrice
    //     })
    //     //Salva o preço total com os dados atualizados.
    //     this.setState({
    //         totalPrice: totalPriceAux
    //     })
    // }

    // calculatorShippping(){
    //     //Carrinho auxiliar recebe uma cópia de carrinho.
    //     let cartAux = this.state.cart.slice();
    //     let totalPriceAux = this.state.totalPrice;
    //     let shippingAux = 0;
    //     //Se o preço total for acima de 250, o frente é gratis.
    //     if(totalPriceAux > 250){
    //         shippingAux = 0;
    //     }else{
    //         //Caso contrário, soma 10,00 ao frente por cada produto adicionado.
    //         shippingAux = cartAux.length() * 10;
    //     }
    //     //Salva o valor do frete com os dados atualizados.
    //     this.setState({
    //         shipping: shippingAux
    //     })
    // }

    // removeProductCart(product){
    //     //Carrinho auxiliar recebe uma cópia de carrinho.
    //     let cartAux = this.state.cart.slice();
    //     let index = cartAux.indexOf(product);
    //     //Remove o produto do carrinho
    //     cartAux.splice(index, 1);
    //     //Salva o carrinho auxiliar com o produto removido;
    //     this.setState({
    //         cart: cartAux
    //     })
    //     //Recalcula o preço total
    //     this.calculatorTotalPrice();
    // }

    render(){
        return(
            <View>
                <ScrollView>
                        <View>
                            {this.state.cart.map(product => 
                                    <Product product={product}/>
                            )}
                        </View>
                </ScrollView>
            </View>
        )
    }








}

export default Checkout;