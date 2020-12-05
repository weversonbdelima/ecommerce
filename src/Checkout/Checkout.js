import React from 'react';


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
        //Calcula o preço total dos produtos do carrinho.
        this.calculatorTotalPrice();
        //Calcula o preço do frete
        this.calculatorShippping();
    }

    calculatorTotalPrice(){
        //Carrinho auxiliar recebe uma cópia de carrinho.
        let cartAux = this.state.cart.slice();
        let totalPriceAux = 0;
        //Soma o subtotal dos produtos do carrinho.
        cartAux.map(product => {
            totalPriceAux += product.subTotalPrice
        })
        //Salva o preço total com os dados atualizados.
        this.setState({
            totalPrice: totalPriceAux
        })
    }

    calculatorShippping(){
        //Carrinho auxiliar recebe uma cópia de carrinho.
        let cartAux = this.state.cart.slice();
        let totalPriceAux = this.state.totalPrice;
        let shippingAux = 0;
        //Se o preço total for acima de 250, o frente é gratis.
        if(totalPriceAux > 250){
            shippingAux = 0;
        }else{
            //Caso contrário, soma 10,00 ao frente por cada produto adicionado.
            shippingAux = cartAux.length() * 10;
        }
        //Salva o valor do frete com os dados atualizados.
        this.setState({
            shipping: shippingAux
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
                </ScrollView>
            </View>
        )
    }








}

export default Checkout;