import database from "../../database";
import { productReturnedData } from "../../serializers/products.serializers";

const updateProductService = async (data) => {
  const productUpdated = Object.assign(data.product, data.body);
  const queryResponse = await database.query(
    `UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *;`,
    [
      productUpdated.name,
      productUpdated.price,
      productUpdated.category_id,
      productUpdated.id,
    ]
  );
  const returnedProduct = await productReturnedData.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );
  return returnedProduct;
};
export default updateProductService;
