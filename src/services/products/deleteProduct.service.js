import database from "../../database";

const deleteProductService = async (data) => {
  const queryResponse = await database.query(
    `DELETE FROM products WHERE id = $1 RETURNING *;`,
    [data.params.id]
  );
};

export default deleteProductService;
