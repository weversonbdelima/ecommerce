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

    componentDidMount(){
        //Calcula o preço subtotal dos produtos ao montar o component checkout.
        this.calculatorSubTotalPrice();
        //Calcula o preço total dos produtos ao montar o component checkout.
        this.calculatorTotalPrice();
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
    calculatorTotalPrice(){
        //Produto auxiliar recebe uma cópia de produtos
        let cartAux = this.state.cart.slice();
        let totalPriceAux = 0;
        cartAux.map(product => {
            totalPriceAux+= product.subTotalPrice;
        })
        //Atualiza o preço total do carrinho
        this.setState({
            totalPrice: totalPriceAux
        })
    }


    render(){
        return(
            <View>
                <ScrollView>
                        <View>
                            {this.state.cart.map(product => 
                                    <Product product={product}/>
                            )}
                        </View>
                        <View>
                            <Text>{this.state.totalPrice}</Text>
                        </View>
                        
                </ScrollView>
            </View>
        )
    }








}

export default Checkout;