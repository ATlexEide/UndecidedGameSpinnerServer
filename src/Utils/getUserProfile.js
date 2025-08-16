require("dotenv").config();

async function getUserProfile(req) {
  console.log(req);
  console.log(req.params);
  return await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&format=json&steamids=${req.params.id}`
  )
    .then((result) => result.json())
    .catch((err) => {
      throw new Error(`Failed to fetch user profile:
                      ${err}`);
    });
}

exports.getUserProfile = getUserProfile;
