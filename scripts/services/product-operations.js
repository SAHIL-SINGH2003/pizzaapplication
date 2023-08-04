//contains the logic for searching,sorting ,deletion,adding,updation
/*
it talk to network layer to bring the json amd convert json into object vice-versa

*/



import Product from '../models/product.js';
import makeNetworkCall from './api-client.js';

const productOperations = {
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id, pizza.name,
                 pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                return currentPizza;
                })
                console.log('Product Array ', productsArray);
                return productsArray;  // Wrap in Promise
            },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperations;
