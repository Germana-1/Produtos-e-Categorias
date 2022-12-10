import database from "../../database";
import { AppError } from "../../errors";

const listProductByCategoryService = async (data) => {
  const searchCategory = await database.query(
    `SELECT * FROM products WHERE category_id = $1;`,
    [data.params.category_id]
  );

  if (searchCategory.rows.length === 0) {
    throw new AppError("Product not found!", 404);
  }
  const queryResponse = await database.query(
    `SELECT p.*, c.name as category FROM products p INNER JOIN categories c
    ON p.category_id = c.id WHERE p.category_id = $1;`,
    [data.params.category_id]
  );

  return queryResponse.rows;
};

export default listProductByCategoryService;
