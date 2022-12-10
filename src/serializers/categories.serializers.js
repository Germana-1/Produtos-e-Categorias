import * as yup from "yup";

const createCategoriesSerializers = yup.object().shape({
  name: yup.string().max(200).required(),
});

const categoryReturnedData = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
});

const listCategoriesReturnedData = yup.array(categoryReturnedData);

export {
  createCategoriesSerializers,
  categoryReturnedData,
  listCategoriesReturnedData,
};
