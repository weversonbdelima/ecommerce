import React from 'react'
import { View, ScrollView, TextInput,Picker, Button} from 'react-native';

import Products from '../products.json';
import Product from '../Product/Product'

import styles from './styles'
import { set } from 'react-native-reanimated';

class Shopping extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: Products,
            selectedValue: '',
            cart: []
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

    addProductCart(product){
        //Carrinho auxiliar recebe carrinho.
        let cartAux = this.state.cart.slice();
        let productAux = [];
        let index = 0;
        //Verifica se existe algum elemento correspondente no carrinho
        if(cartAux.indexOf(product) !== -1){
            //Caso exista elemento no carrinho, incrementa quantidade do elemento.
            index = cartAux.indexOf(product);
            productAux = cartAux[index];
            productAux.quantity += 1;
            cartAux[index] = productAux;
        }else{
            //Se não existir elemento, insere no carrinho.
            product.quantity = 1;
            //Calcula o preço subtotal do produto
            product.priceSubTotal = product.price;
            cartAux.push(product);
        
        }
        //Salva o carrinho com os dados atualizados
        this.setState({
            cart: cartAux
        });
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