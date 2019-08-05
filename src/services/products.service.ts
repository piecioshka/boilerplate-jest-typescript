import fetch from 'node-fetch';
import { urls } from '../config/urls';

class ProductsService {

    async getProducts() {
        const response = await fetch(urls.productsUrl);
        return response.json();
    }

}

export const Products = new ProductsService();
