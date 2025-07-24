const express = require("express");
const { getUserProfile, getUserTest } = require("./src/Utils/getUserProfile");
const app = express();
const port = 3000;

app.get("/user/:id", async (req, res) => getUserProfile(req, res));

app.get("/user", (req, res) => getUserTest(req, res));

app.listen(port, () => {
  console.log(`UndecidedGameSpinner server listening on port ${port}`);
});
