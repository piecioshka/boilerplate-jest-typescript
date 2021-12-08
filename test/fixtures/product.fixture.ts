import faker from "faker";
import { Product } from "../../src/interfaces/product.interface";

export const productFactory = (): Product => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  description: faker.lorem.sentences(1),
  productUrl: faker.image.image(),
});
