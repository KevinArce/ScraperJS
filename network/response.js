/*
    This is a function that sends a response to the client. 
    It takes in 4 parameters: req, res, message and status. 
    The first two are required by Express, and the last two are optional. 
    If no status is provided, it defaults to 200 (OK). 
    If no message is provided, it defaults to an empty string
 */
exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || "";
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

/*
    This is a function that sends a response to the client. 
    It takes in 4 parameters: req, res, message and status. 
    The first two are required by Express, and the last two are optional. 
    If no status is provided, it defaults to 500 (Internal Server Error). 
    If no message is provided, it defaults to an empty string
 */
exports.error = (req, res, message, status) => {
  let statusCode = status || 500;
  let statusMessage = message || "Internal Server Error";
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: statusMessage,
  });
};
