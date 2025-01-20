import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RatingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product!: Product;

  constructor(private router: Router, private cartService: CartService) {}

  goToDetails(event: Event) {
    if (!(event.target as HTMLElement).closest('button')) {
      this.router.navigate(['/details', this.product.id]);
    }
  }

  addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }
}
