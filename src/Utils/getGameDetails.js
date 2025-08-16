require("dotenv").config();

async function getGameDetails(appid) {
  return await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${Number(appid)}`
  )
    .then((result) => result.json())
    .catch((err) => {
      throw new Error(`Failed to fetch game details:
                      ${err}`);
    });
}

exports.getGameDetails = getGameDetails;
