import database from "../../database";
import { AppError } from "../../errors";
import { categoryReturnedData } from "../../serializers/categories.serializers";

const createCategoriesService = async (data) => {
  const searchCategory = await database.query(
    `SELECT * FROM categories WHERE name = $1`,
    [data.name]
  );

  if (searchCategory.rowCount > 0) {
    throw new AppError("category already exists", 400);
  }

  const queryResponse = await database.query(
    `INSERT INTO categories(name) VALUES ($1) RETURNING *;`,
    [data.name]
  );

  const returnedCategory = await categoryReturnedData.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedCategory;
};

export default createCategoriesService;
