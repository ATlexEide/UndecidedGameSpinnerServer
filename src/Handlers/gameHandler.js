const { getGameDetails } = require("../Utils/getGameDetails");

async function handleGame(req, res) {
  if (!req.params.id)
    res.status(errors.gameHandlerNoId.status).send(errors.gameHandlerNoId);

  if (!req.params.action)
    res
      .status(errors.gameHandlerNoAction.status)
      .send(errors.gameHandlerNoAction);

  switch (req.action) {
    case "details":
      res.send(await getGameDetails(req));
      break;

    default:
      break;
  }
}

exports.handleGame = handleGame;
