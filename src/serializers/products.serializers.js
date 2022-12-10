import * as yup from "yup";
import { v4 } from "uuid";

const createProductsSerializers = yup.object().shape({
  id: yup
    .string()
    .default(() => v4())
    .transform(() => v4()),
  name: yup.string().max(200).required(),
  price: yup.number().required(),
  category_id: yup.number().notRequired(),
});

const productReturnedData = yup.object().shape({
  id: yup.string().default(() => v4()),
  name: yup.string(),
  price: yup.number(),
  category_id: yup.number().nullable(true),
});

const listProductsReturnedData = yup.array(productReturnedData);

export {
  createProductsSerializers,
  productReturnedData,
  listProductsReturnedData,
};
