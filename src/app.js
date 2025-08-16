const express = require("express");
const { getUserProfile } = require("./Utils/getUserProfile.js");
const { getUserLibrary } = require("./Utils/getUserLibrary.js");
const { getGameDetails } = require("./Utils/getGameDetails.js");
const { test } = require("./Utils/test.js");
const { handleUser } = require("./Handlers/userHandler.js");
const { handleGame } = require("./Handlers/gameHandler.js");

const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Hellooooo world"));
// Action: "profile" or "library"
app.get("/user{/:steamid}{/:action}", async (req, res) => handleUser(req, res));

// Action: "details"
app.get("/game{/:appid}{/:action}", async (req, res) => handleGame(req, res));

// app.get("/test", async (req, res) => test(req, res));

app.listen(port, () => {
  console.log(`UndecidedGameSpinner server listening on port ${port}`);
});
