import database from "../../database";

const deleteCategoryService = async (data) => {
  const queryResponse = await database.query(
    `DELETE FROM categories WHERE id = $1 RETURNING *;`,
    [data.params.id]
  );
};

export default deleteCategoryService;
