import database from "../../database";
import { categoryReturnedData } from "../../serializers/categories.serializers";

const updateCategoryService = async (data) => {
  const categoryUpdated = Object.assign(data.category, data.body);

  const queryResponse = await database.query(
    `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;`,
    [categoryUpdated.name, categoryUpdated.id]
  );

  const returnedCategory = await categoryReturnedData.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );
  return returnedCategory;
};

export default updateCategoryService;
