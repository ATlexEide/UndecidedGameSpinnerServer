async function getUserProfile(req, res) {
  console.log(req.params.id);
  await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=44EE35206BFF58055FD20D4770B2FDB0&format=json&steamids=${req.params.id}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result));
}

exports.getUserProfile = getUserProfile;
