import { Router } from "express";
import {
  createCategoriesController,
  deleteCategoryController,
  listCategoriesController,
  retrieveCategoryController,
  updateCategoryController,
} from "../controllers/categories.controllers";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middlewares";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import { createCategoriesSerializers } from "../serializers/categories.serializers";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureDataIsValidMiddleware(createCategoriesSerializers),
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id",
  ensureCategoryExistsMiddleware,
  retrieveCategoryController
);
categoriesRoutes.patch(
  "/:id",
  ensureCategoryExistsMiddleware,
  updateCategoryController
);

categoriesRoutes.delete(
  "/:id",
  ensureCategoryExistsMiddleware,
  deleteCategoryController
);

export default categoriesRoutes;
