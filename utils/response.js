module.exports = (data, message, statusCode, error = false) => {
  return {
    status: statusCode,
    error: error,
    message,
    data,
  };
};
