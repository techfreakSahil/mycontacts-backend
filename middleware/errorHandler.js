const { constant } = require("../constant");
const errorHandler = (err, res, req, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constant.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constant.UNAUTHORISED:
      res.json({
        title: "Unauthorised",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constant.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    default:
      console.log("No error");
      break;
  }
};

module.exports = errorHandler;
