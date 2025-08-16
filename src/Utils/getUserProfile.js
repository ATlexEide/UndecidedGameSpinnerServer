require("dotenv").config();

async function getUserProfile(steamid) {
  return await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&format=json&steamids=${steamid}`
  )
    .then((result) => result.json())
    .catch((err) => {
      throw new Error(`Failed to fetch user profile:
                      ${err}`);
    });
}

exports.getUserProfile = getUserProfile;
