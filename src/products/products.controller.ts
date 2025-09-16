/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //   Method to fetch all products
  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }

  // Method to fetch prodcut by ID
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }
}
