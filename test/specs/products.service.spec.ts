import { Products } from "../../src/services/products.service";

global.fetch = async () => new Response('[]');

describe("ProductsService", () => {
    describe("getProducts", () => {
        it("should be a function", () => {
            expect(Products.getProducts).toEqual(expect.any(Function));
        });
        it("should returns a product list", async () => {
            const products = await Products.getProducts();
            expect(products).toEqual(expect.any(Array));
        });
    });
});
