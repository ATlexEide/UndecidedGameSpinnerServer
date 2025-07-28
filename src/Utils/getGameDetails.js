require("dotenv").config();

async function getGameDetails(req, res) {
  console.log(req.params.id);
  await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${req.params.id}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result));
}

exports.getGameDetails = getGameDetails;
