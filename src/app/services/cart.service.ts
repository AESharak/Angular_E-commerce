import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem.interface';
import { Product } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cartSubject.next(this.cart);
    }
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const item = this.cart.find((i) => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.images[0],
        stock: product.stock,
      });
    }
    this.updateCart();
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.updateCart();
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cart.find((i) => i.id === id);
    if (item && quantity > 0 && quantity <= item.stock) {
      item.quantity = quantity;
      this.updateCart();
    }
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }
}
