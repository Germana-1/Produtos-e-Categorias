class AppError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = { message };
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.message);
  }
  console.log(err);
  return res.status(404).json({ message: "Internal server error" });
};

export { AppError, errorHandler };
