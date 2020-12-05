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