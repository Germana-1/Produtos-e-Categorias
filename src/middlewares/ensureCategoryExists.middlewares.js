import database from "../database";
import { AppError } from "../errors";

const ensureCategoryExistsMiddleware = async (req, res, next) => {
  const queryResponse = await database.query(
    `SELECT * FROM categories WHERE id = $1;`,
    [req.params.id]
  );

  const category = queryResponse.rows[0];

  if (!category) {
    throw new AppError("Category not found!", 404);
  }

  req.category = category;

  return next();
};
export default ensureCategoryExistsMiddleware;
