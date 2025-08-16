const { getGameDetails } = require("../Utils/getGameDetails");
const { errors } = require("../Errors.js");

async function handleGame(req, res) {
  if (!req.params.appid)
    res.status(errors.gameHandlerNoId.status).send(errors.gameHandlerNoId);

  if (!req.params.action)
    res
      .status(errors.gameHandlerNoAction.status)
      .send(errors.gameHandlerNoAction);

  switch (req.params.action) {
    case "details":
      res.send(await getGameDetails(req.params.appid));
      break;

    default:
      break;
  }
}

exports.handleGame = handleGame;
