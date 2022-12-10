import database from "../../database";
import { AppError } from "../../errors";
import { listCategoriesReturnedData } from "../../serializers/categories.serializers";

const listCategoriesService = async () => {
  const queryResponse = await database.query(`SELECT * FROM categories;`);

  if (queryResponse.rows.length === 0) {
    throw new AppError("Category not found!", 404);
  }

  const returnedData = await listCategoriesReturnedData.validate(
    queryResponse.rows,
    { stripUnknown: true }
  );

  return returnedData;
};

export default listCategoriesService;
