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
  },

  gameHandlerDefaultError: {
    code: 4,
    status: 422,
    message: "Invalid parameter(s)"
  },

  gameHandlerNoAppid: {
    code: 5,
    status: 422,
    message: "Missing appid in request"
  },

  gameHandlerNoAction: {
    code: 6,
    status: 422,
    message: "Missing action in request"
  }
};

exports.errors = errors;
