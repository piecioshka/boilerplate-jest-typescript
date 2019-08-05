import { Products } from "./services/products.service";

async function main() {

    const products = await Products.getProducts();
    console.log(products);

}

main();
