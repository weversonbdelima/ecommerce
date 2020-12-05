import React from 'react'
import { View, ScrollView, TextInput, Button} from 'react-native';

import Products from '../products.json';
import Product from '../Product/Product'

import styles from './styles'

class Shopping extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: Products
        }
    }


    onChangeSearch(search){
        //Produto auxiliar recebe uma cópia de produtos
        let productsAux = Products.slice();
        let productsSearch = [];

        productsAux.map( product => {
            if(product.name.indexOf(search) !== -1){
                productsSearch.push(product);
            }
        })
        this.setState({
            products: productsSearch
        })
    }

    render(){
        return(
            <View>
                <View>
                    <TextInput
                    style={styles.textInput}
                        onChangeText={ search => this.onChangeSearch(search)}
                    />
                </View>            
                <ScrollView>
                            {this.state.products.map(product => 
                                <View>
                                    <Product product={product}/>
                                    <Button
                                        title="Add to cart"
                                        onPress={()=>this.addProductCart(product)}
                                    />
                                </View>
                            )}
                </ScrollView>
            </View>

        );
    }
}
export default Shopping;