require("dotenv").config();

async function getGameDetails(req) {
  console.log(req.params.id);
  return await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${Number(
      req.params.id
    )}`
  )
    .then((result) => result.json())
    .catch((err) => {
      throw new Error(`Failed to fetch game details:
                      ${err}`);
    });
}

exports.getGameDetails = getGameDetails;
