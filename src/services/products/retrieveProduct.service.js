import { productReturnedData } from "../../serializers/products.serializers";

const retrieveProductService = async (data) => {
  const returnedProduct = await productReturnedData.validate(data.product, {
    stripUnknown: true,
  });
  return returnedProduct;
};

export default retrieveProductService;
