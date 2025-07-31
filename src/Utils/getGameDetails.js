require("dotenv").config();

async function getGameDetails(req, res) {
  console.log(req.params.id);
  await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${Number(
      req.params.id
    )}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => {
      throw new Error(`Failed to fetch game details:
                      ${err}`);
    });
}

exports.getGameDetails = getGameDetails;
