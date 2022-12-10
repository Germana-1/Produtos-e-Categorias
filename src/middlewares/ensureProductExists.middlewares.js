import database from "../database";
import { AppError } from "../errors";

const ensureProductExistsMiddleware = async (req, res, next) => {
  const queryResponse = await database.query(
    `SELECT * FROM products WHERE id = $1;`,
    [req.params.id]
  );

  const product = queryResponse.rows[0];

  if (!product) {
    throw new AppError("Product not found!", 404);
  }

  req.product = product;

  return next();
};
export default ensureProductExistsMiddleware;
