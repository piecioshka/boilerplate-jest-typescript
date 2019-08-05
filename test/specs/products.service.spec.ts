import { Products } from "../../src/services/products.service";

describe('ProductsService', () => {
    describe('getProducts', () => {
        it('should be a function', () => {
            expect(Products.getProducts).toEqual(expect.any(Function));
        });
    });
});
