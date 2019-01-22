import { ApplicationRef, Component } from '@angular/core';
import { Product } from "./Product"

@Component({
  selector: 'app-events-exercises',
  templateUrl: './events-exercises.component.html',
  styleUrls: ['./events-exercises.component.css']
})
export class EventsExercisesComponent {
  products: Product[] = [
    {
      name: "product1",
      category: "category1",
      price: 1.20
    },
    {
      name: "product2",
      category: "category2",
      price: 1.50
    }];

  getProduct(key: number): Product {
    return this.products[key];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
