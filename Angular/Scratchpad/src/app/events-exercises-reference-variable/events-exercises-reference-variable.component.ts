import { ApplicationRef, Component } from '@angular/core';
import { Product } from "../events-exercises/Product"

@Component({
  selector: 'app-events-exercises-reference-variable',
  templateUrl: './events-exercises-reference-variable.component.html',
  styleUrls: ['./events-exercises-reference-variable.component.css']
})
export class EventsExercisesReferenceVariableComponent {
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
