import database from "../../database";
import { AppError } from "../../errors";
import { listProductsReturnedData } from "../../serializers/products.serializers";

const listProductsService = async () => {
  const queryResponse = await database.query(`SELECT * FROM products;`);

  if (queryResponse.rows.length === 0) {
    throw new AppError("Empty list", 404);
  }

  const returnedData = await listProductsReturnedData.validate(
    queryResponse.rows,
    { stripUnknown: true }
  );
  return returnedData;
};

export default listProductsService;
