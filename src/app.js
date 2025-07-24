const express = require("express");
const { getUserProfile } = require("./Utils/getUserProfile.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hellooooo world"));
app.get("/user/:id", async (req, res) => getUserProfile(req, res));

app.listen(port, () => {
  console.log(`UndecidedGameSpinner server listening on port ${port}`);
});
