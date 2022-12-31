import APIError from '../utils/APIError.js';

const errorHandler = (error, req, res, next) => {
  if (error instanceof APIError) {
    return res
      .status(error.code)
      .json({ message: error.message, code: error.code, path: req.url });
  }

  return res
    .status(500)
    .json({ message: 'Internal Server Error', code: 500, path: req.url });
};

export default errorHandler;

