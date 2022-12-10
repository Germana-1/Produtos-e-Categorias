import database from "../../database";
import { AppError } from "../../errors";
import { categoryReturnedData } from "../../serializers/categories.serializers";

const retrieveCategoryService = async (data) => {
  //   const queryResponse = await database.query(
  //     `SELECT * FROM categories WHERE id = $1;`,
  //     [data.params.id]
  //   );
  //   console.log(data.category);

  const returnedCategory = await categoryReturnedData.validate(data.category, {
    stripUnknown: true,
  });
  return returnedCategory;
};

export default retrieveCategoryService;
