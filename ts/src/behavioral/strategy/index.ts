import { ECommerceShoppingCart } from "./shopping-cart/e-commerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/strategies/new-discount";


const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount()
shoppingCart.addProduct({ name: 'Product 1', price: 50 });
shoppingCart.addProduct({ name: 'Product 2', price: 50 });
shoppingCart.addProduct({ name: 'Product 2', price: 50 });


console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());