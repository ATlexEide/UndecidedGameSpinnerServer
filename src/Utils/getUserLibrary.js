require("dotenv").config();

async function getUserLibrary(req, res) {
  console.log(req.params.id);
  await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.params.id}&format=json`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => {
      throw new Error(`Failed to fetch user library:
                      ${err}`);
    });
}

exports.getUserLibrary = getUserLibrary;
