import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CarItems } from '../models/cartItems';
import { CarItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addToCart(product:Product)
  {
    let item = CarItems.find(c=>c.product.productId === product.productId);
    if(item)
    {
      item.quantity +=1;
    }
    else{
      let cartItem = new CarItem();
      cartItem.product = product
      cartItem.quantity = 1;
      CarItems.push(cartItem);
    }
  }

  list():CarItem[]
  {
    return CarItems;
  }
  
  removeFromCart(product:Product)
  {
    let item:CarItem = CarItems.find(c=>c.product.productId === product.productId);
    CarItems.splice(CarItems.indexOf(item),1);
  }

  constructor() { }
}
