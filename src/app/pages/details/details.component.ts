import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;
  isLoading = true;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    try {
      const id = this.route.snapshot.params['id'];
      const response = await fetch('products.json');
      const data = await response.json();
      this.product = data.products.find((p: Product) => p.id === Number(id));
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading product:', error);
      this.isLoading = false;
    }
  }

  addToCart() {
    console.log('Added to cart:', this.product);
  }

  buyNow() {
    console.log('Buy now:', this.product);
  }
}
