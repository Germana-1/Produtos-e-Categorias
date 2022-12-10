const ensureDataIsValidMiddleware = (serializer) => async (req, res, next) => {
  try {
    const validated = await serializer.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });
    req.validatedBody = validated;

    return next();
  } catch (error) {
    return res.status(400).json({
      message: error.errors,
    });
  }
};

export default ensureDataIsValidMiddleware;
