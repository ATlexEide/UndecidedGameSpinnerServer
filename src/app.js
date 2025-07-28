const express = require("express");
const { getUserProfile } = require("./Utils/getUserProfile.js");
const { getUserLibrary } = require("./Utils/getUserLibrary.js");
const { getGameDetails } = require("./Utils/getGameDetails.js");

const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Hellooooo world"));
app.get("/user/:id", async (req, res) => getUserProfile(req, res));
app.get("/library/:id", async (req, res) => getUserLibrary(req, res));
app.get("/game/:id", async (req, res) => getGameDetails(req, res));

app.listen(port, () => {
  console.log(`UndecidedGameSpinner server listening on port ${port}`);
});
