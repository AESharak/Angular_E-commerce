import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/products.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private router: Router) {}

  goToDetails(event: Event) {
    if (!(event.target as HTMLElement).closest('button')) {
      this.router.navigate(['/details', this.product.id]);
    }
  }

  addToCart(event: Event) {
    event.stopPropagation();
    if (this.product.stock > 0) {
      this.addToCartEvent.emit(this.product);
    }
  }
}
