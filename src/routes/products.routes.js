import { Router } from "express";
import {
  createProductsController,
  deleteProductController,
  listProductByCategoryController,
  listProductsController,
  retrieveProductController,
  updateProductController,
} from "../controllers/products.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import ensureProductExistsMiddleware from "../middlewares/ensureProductExists.middlewares";
import { createProductsSerializers } from "../serializers/products.serializers";

const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureDataIsValidMiddleware(createProductsSerializers),
  createProductsController
);

productsRoutes.get("", listProductsController);
productsRoutes.get(
  "/:id",
  ensureProductExistsMiddleware,
  retrieveProductController
);

productsRoutes.patch(
  "/:id",
  ensureProductExistsMiddleware,
  updateProductController
);

productsRoutes.delete(
  "/:id",
  ensureProductExistsMiddleware,
  deleteProductController
);

productsRoutes.get("/category/:category_id", listProductByCategoryController);

export default productsRoutes;
