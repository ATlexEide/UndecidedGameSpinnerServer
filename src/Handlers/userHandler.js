const { getUserProfile } = require("../Utils/getUserProfile");
const { errors } = require("../Errors.js");
const { getUserLibrary } = require("../Utils/getUserLibrary.js");

async function handleUser(req, res) {
  if (!req.params.steamid)
    res.status(errors.userHandlerNoId.status).send(errors.userHandlerNoId);

  if (!req.params.action)
    res
      .status(errors.userHandlerNoAction.status)
      .send(errors.userHandlerNoAction);

  switch (req.params.action) {
    case "profile":
      res.send(await getUserProfile(req.params.steamid));
      break;

    case "library":
      res.send(await getUserLibrary(req.params.steamid));
      break;

    default:
      res
        .status(errors.userHandlerDefaultError.status)
        .send(errors.userHandlerDefaultError);
      break;
  }
}

exports.handleUser = handleUser;
