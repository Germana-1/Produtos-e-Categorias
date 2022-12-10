import createProductsService from "../services/products/createProducts.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductByCategoryService from "../services/products/listProductByCategory.service";
import listProductsService from "../services/products/listProducts.service";
import retrieveProductService from "../services/products/retrieveProduct.service";
import updateProductService from "../services/products/updateProduct.service";

const createProductsController = async (req, res) => {
  const data = await createProductsService(req.validatedBody);
  return res.status(201).json(data);
};

const listProductsController = async (req, res) => {
  const data = await listProductsService();
  return res.status(200).json(data);
};

const retrieveProductController = async (req, res) => {
  const data = await retrieveProductService(req);
  return res.status(200).json(data);
};

const updateProductController = async (req, res) => {
  const data = await updateProductService(req);
  return res.status(200).json(data);
};

const deleteProductController = async (req, res) => {
  await deleteProductService(req);
  return res.status(204).json({});
};

const listProductByCategoryController = async (req, res) => {
  const data = await listProductByCategoryService(req);
  return res.status(200).json(data);
};

export {
  createProductsController,
  listProductsController,
  retrieveProductController,
  updateProductController,
  deleteProductController,
  listProductByCategoryController,
};
