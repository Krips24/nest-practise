/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  // Create a private array of objects
  private productList = [
    { id: 1, name: 'Mobile', price: '20000' },
    { id: 2, name: 'Tablet', price: '30000' },
    { id: 3, name: 'Laptop', price: '40000' },
  ];

  // Method to fetch all products
  getAllProducts() {
    return this.productList;
  }

  // Method to fetch specific product - (id will be given by the user)
  getProductById(id: number) {
    return this.productList.find((product) => product.id === id);
  }
}
