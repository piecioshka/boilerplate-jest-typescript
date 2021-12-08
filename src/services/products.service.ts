import { urls } from "../config/urls";
import { Product } from "../interfaces/product.interface";
import { makeRequest } from "../utils/make-request";

class ProductsService {
  getProducts(): Promise<Product[]> {
    return makeRequest(urls.productsUrl);
  }
}

export const Products = new ProductsService();
