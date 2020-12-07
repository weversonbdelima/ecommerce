class Cart {

    constructor(){
        this.products = [];
        this.totalPrice = 0;
        this.shipping = 0;
    }

    setProducts(product){
         //Carrinho auxiliar recebe carrinho.
         let productsAux = this.products;
         let productAux = [];
         let index = 0;
         //Verifica se existe algum elemento correspondente no carrinho
         if(productsAux.indexOf(product) !== -1){
             //Caso exista elemento no carrinho, incrementa quantidade do elemento.
             index = productsAux.indexOf(product);
             productAux = productsAux[index];
             productAux.quantity += 1;
             productAux.priceSubTotal = productAux.quantity * productAux.price;
             productsAux[index] = productAux;
         }else{
             //Se não existir elemento, insere no carrinho.
             product.quantity = 1;
             //Calcula o preço subtotal do produto
             product.priceSubTotal = product.price;
             productsAux.push(product);
         
         }


    }

    getProducts(){
        return this.products
    }

    getTotalPrice(){
        //Calcula o preço total dos produtos no carrinho
        this.totalPrice = 0;
        this.products.map(product => {
            this.totalPrice += product.priceSubTotal;
        })
        return this.totalPrice;
    }

    getShipping(){
        this.shipping = 0;
        if(this.totalPrice > 250){
            this.shipping = 0;
            return this.shipping;
        }else{
            this.products.map(product => {
                this.shipping += 10.00
            })
            return this.shipping;
        }
    }

    removeProduct(product){
           let index = 0;
           //Verifica se existe produtos no carrinho
           if(this.products.length === 0){
               //Não existe produtos dentro do carrinho
                return ;
           }else{
              //Caso exista produtos no carrinho, e realizado a busca do produto e consequentemente sua remoção.
              index = this.products.indexOf(product);
              this.products.splice(index, 1);
           }

    }

    addQuantity(product){
        let index = 0;
        let priceSubTotalAux = 0;
        //Adiciona quantidade do produto
        index = this.products.indexOf(product);
        this.products[index].quantity++;
        this.products[index].priceSubTotal = this.products[index].quantity * this.products[index].price;

    }
    subQuantity(product){
        let index = 0;
        let priceSubTotalAux = 0;
        index = this.products.indexOf(product);
        //Verifica se a quantidade de produtos e maior que 0, se for subtrai a quantidade.
        if(this.products[index].quantity > 1){
            this.products[index].quantity--;
            this.products[index].priceSubTotal = this.products[index].quantity * this.products[index].price;
        }else{
            return;
        }
       
    }


}

const cart = new Cart();


export default cart;