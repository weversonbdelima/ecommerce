import React from 'react'
import { View, ScrollView, TextInput,Picker, Button} from 'react-native';

import Products from '../products.json';
import Product from '../Product/Product'

import cart from '../Classes/Cart'

import styles from './styles'
import { set } from 'react-native-reanimated';

class Shopping extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: Products,
            selectedValue: ''
        }
    }


    onChangeSearch(search){
        //Produto auxiliar recebe uma cópia de produtos
        let productsAux = Products.slice();
        let productsSearch = [];
        //Realize-se uma busca para encontrar correspondência de produtos do mesmo nome
        productsAux.map( product => {
            if(product.name.indexOf(search) !== -1){
                productsSearch.push(product);
            }
        })
        this.setState({
            products: productsSearch
        })
    }

    setSelectdValueOrder(productValue){

        let productsAux = this.state.products.slice();
        //Ordenar os produtos de acordo com o valor dos preços
        if(productValue === 'price'){
            productsAux = productsAux.sort(function(prevProduct, nextProduct){
                if(prevProduct.price > nextProduct.price){
                    return 1;
                }
                if(prevProduct.price < nextProduct.price){
                    return -1;
                }
                return 0;
                
            });
        }
        if(productValue === 'score'){
            //Ordenar os produtos de acordo com o valor dos scores
            productsAux = productsAux.sort(function(prevProduct, nextProduct){
                if(prevProduct.score < nextProduct.score){
                    return 1;
                }
                if(prevProduct.score > nextProduct.score){
                    return -1;
                }
                return 0;
                
            });
        }

        if(productValue === 'alphabeticalOrder'){
            //Ordenar os produtos de acordo com o valor dos scores
            productsAux = productsAux.sort(function(prevProduct, nextProduct){
                if(prevProduct.name > nextProduct.name){
                    return 1;
                }
                if(prevProduct.name < nextProduct.name){
                    return -1;
                }
                return 0;
                
            });
        }
        //Atualiza o estado dos produtos e o valor selecionado.
        this.setState({
            products: productsAux,
            selectedValue: productValue
        })
    }


    purchaseProduct(product){
        //Adiciona o produto ao carrinho
    //    this.addProductCart(product);
        //Redirenciona para a rota de checkout
        this.props.navigation.navigate('Checkout', {cart: this.state.cart});
        
    }

    render(){
        return(
            <View>
                <View>
                    <TextInput
                    style={styles.textInput}
                        onChangeText={ search => this.onChangeSearch(search)}
                    />
                    <Picker
                        selectedValue={this.state.selectedValue}
                        style={styles.picker}
                        onValueChange={(productValue, productIndex) => this.setSelectdValueOrder(productValue)}
                    >
                        <Picker.Item label="Price" value="price"/>
                        <Picker.Item label="Score" value="score"/>
                        <Picker.Item label="Alphabetical Order" value="alphabeticalOrder"/>
                    </Picker>

                </View>            
                <ScrollView>
                            {this.state.products.map(product => 
                                <View>
                                    <Product product={product}/>
                                    <Button
                                        title="Add to cart"
                                        onPress={()=> cart.setProducts(product)}
                                    />
                                    <Button
                                        title="Purchase"
                                        onPress={()=>this.purchaseProduct(product)}
                                    />
                                </View>
                            )}
                </ScrollView>
            </View>

        );
    }
}
export default Shopping;