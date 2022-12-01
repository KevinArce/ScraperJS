const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();
/*
This is a router that handles the get request to the root of the api. 
It will call the list function in controller and 
send back a response with status code 200 if everything goes well, 
or 500 if there's an error.
 */
router.get("/", async (req, res) => {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (err) {
    response.error(req, res, "Unexpected Error", 500, err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (err) {
    response.error(req, res, "Unexpected Error", 500, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await Controller.upsert(req.body);
    response.success(req, res, user, 201);
  } catch (err) {
    response.error(req, res, "Unexpected Error", 500, err);
  }
});

module.exports = router;
