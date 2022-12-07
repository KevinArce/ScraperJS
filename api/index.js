/* Importing the express framework. */
const express = require("express");
/* A middleware that parses the body of the request and converts it to a JSON object. */
const bodyParser = require("body-parser");

/* Importing the config file. */
const config = require("../config");
/* Importing the user module. */
const user = require("./components/user/network");

/* Creating an instance of the express framework. */
const app = express();

/* A middleware that parses the body of the request and converts it to a JSON object. */
app.use(bodyParser.json());

/* Routes */
app.use("/api/user", user);

/* Listening to the port that is defined in the config file. */
app.listen(config.api.port, () => {
  console.log(`Listening http://localhost:${config.api.port}`);
});
