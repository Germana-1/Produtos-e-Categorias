import createCategoriesService from "../services/categories/createCategories.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import retrieveCategoryService from "../services/categories/retrieveCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";

const createCategoriesController = async (req, res) => {
  const data = await createCategoriesService(req.validatedBody);
  return res.status(201).json(data);
};

const listCategoriesController = async (req, res) => {
  const data = await listCategoriesService();
  return res.status(200).json(data);
};

const retrieveCategoryController = async (req, res) => {
  const data = await retrieveCategoryService(req);
  return res.status(200).json(data);
};

const updateCategoryController = async (req, res) => {
  const data = await updateCategoryService(req);
  return res.status(200).json(data);
};

const deleteCategoryController = async (req, res) => {
  await deleteCategoryService(req);
  return res.status(204).json({});
};

export {
  createCategoriesController,
  listCategoriesController,
  retrieveCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
