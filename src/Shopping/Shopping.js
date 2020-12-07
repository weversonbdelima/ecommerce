import React from 'react'
import { View, ScrollView, TextInput,Picker, Text, Button, Image} from 'react-native';

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


    

    render(){
        return(
            <View >
                <View style={styles.header}>
                    <TextInput
                    style={styles.textInput}
                        onChangeText={ search => this.onChangeSearch(search)}
                        placeholder="search"
                    />
                   <Text style={styles.text}>Order: </Text>
                    <View style={styles.selected}>               
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

                </View>            
                <ScrollView style={styles.container} centerContent={true}>
                            {this.state.products.map(product => 
                                <View style={styles.card}>
                                    <Product product={product} navigation={this.props.navigation}/>
                                </View>
                            )}
                </ScrollView>
            </View>
        );
    }
}
export default Shopping;