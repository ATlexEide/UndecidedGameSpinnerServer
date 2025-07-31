require("dotenv").config();

async function getUserProfile(req, res) {
  console.log(req.params.id);
  await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&format=json&steamids=${req.params.id}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => {
      throw new Error(`Failed to fetch user profile:
                      ${err}`);
    });
}

exports.getUserProfile = getUserProfile;
