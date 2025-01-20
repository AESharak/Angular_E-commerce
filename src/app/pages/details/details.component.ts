import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RatingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    try {
      const id = this.route.snapshot.params['id'];
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      this.product = data.products.find((p: Product) => p.id === Number(id));
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading product:', error);
      this.isLoading = false;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  buyNow() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      // Additional buy now logic...
    }
  }
}
