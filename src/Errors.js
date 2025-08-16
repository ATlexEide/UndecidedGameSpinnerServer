const errors = {
  userHandlerDefaultError: {
    code: 1,
    status: 422,
    message: "Invalid parameter(s)"
  },
  userHandlerNoId: {
    code: 2,
    status: 422,
    message: "Missing id in request"
  },
  userHandlerNoAction: {
    code: 3,
    status: 422,
    message: "Missing action in request"
  }
};

exports.errors = errors;
