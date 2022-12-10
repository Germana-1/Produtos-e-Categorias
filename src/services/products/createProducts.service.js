import database from "../../database";
import { productReturnedData } from "../../serializers/products.serializers";

const createProductsService = async (data) => {
  if (!data.category_id || data.category_id === undefined) {
    data.category_id = null;
  }

  const queryResponse = await database.query(
    `INSERT INTO products(name, price, category_id, id) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [data.name, data.price, data.category_id, data.id]
  );

  const returnedProduct = await productReturnedData.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );
  return returnedProduct;
};

export default createProductsService;
