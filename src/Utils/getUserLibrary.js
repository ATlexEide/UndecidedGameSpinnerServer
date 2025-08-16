require("dotenv").config();

async function getUserLibrary(steamid) {
  return await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&format=json`
  )
    .then((result) => result.json())
    .catch((err) => {
      throw new Error(`Failed to fetch user library:
                      ${err}`);
    });
}

exports.getUserLibrary = getUserLibrary;
