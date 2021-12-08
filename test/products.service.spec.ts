import { Products } from "../src/services/products.service";
import { productFactory } from "./fixtures/product.fixture";

describe("ProductsService", () => {
  describe("getProducts", () => {
    it("should be a function", () => {
      expect(Products.getProducts).toEqual(expect.any(Function));
    });

    it("should returns a product list", async () => {
      jest
        .spyOn(global, "fetch")
        .mockImplementation(
          async () => new Response(JSON.stringify([productFactory()]))
        );

      const products = await Products.getProducts();
      expect(products).toEqual(expect.any(Array));
      expect(products.length).toEqual(1);
    });
  });
});
