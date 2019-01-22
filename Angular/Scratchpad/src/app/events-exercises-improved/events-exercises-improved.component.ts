import { ApplicationRef, Component } from '@angular/core';
import { Product } from "../events-exercises/Product"

@Component({
  selector: 'app-events-exercises-improved',
  templateUrl: './events-exercises-improved.component.html',
  styleUrls: ['./events-exercises-improved.component.css']
})
export class EventsExercisesImprovedComponent {
  selectedProduct: string;
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

  getSelected(product: Product) {
    return product.name == this.selectedProduct;
  }
}
