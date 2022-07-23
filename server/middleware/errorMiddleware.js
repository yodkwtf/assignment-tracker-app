import { StatusCodes } from 'http-status-codes';

const errorMiddleware = (err, req, res, next) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };

  // check missing fields
  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((e) => e.message)
      .join(', ');
  }

  // check unique fields
  if (err.code === 11000) {
    defaultError.statusCode = StatusCodes.CONFLICT;
    defaultError.msg = `${Object.keys(err.keyValue)} already exists`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorMiddleware;
