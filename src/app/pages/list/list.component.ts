import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  async ngOnInit() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      this.products = data.products;
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
}
