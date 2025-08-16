async function test(req, res) {
  const appIDs = "13520,13230";
  await fetch(
    `http://store.steampowered.com/api/appdetails/p?appids=13520&appids=13230`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => {
      throw new Error(`Failed to fetch test
                      ${err}`);
    });
}

exports.test = test;
