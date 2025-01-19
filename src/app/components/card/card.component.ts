import { Component, Input } from '@angular/core';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) product!: Product;

  addToCart() {
    console.log('Added to cart:', this.product);
  }
}
