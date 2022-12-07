/* Importing the express module. */
const express = require("express");

/* Importing the response module from the network folder. */
const response = require("../../../network/response");
/* Importing the index.js file from the current folder. */
const Controller = require("./index");

const router = express.Router();

/* Creating the routes for the API. */
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

/**
 * It calls the list() function from the Controller, and if it succeeds, it returns a success response,
 * otherwise it returns an error response
 * @param req - The request object.
 * @param res - The response object.
 */
function list(req, res) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
}

/**
 * It gets a user from the database and returns it to the client
 * @param req - The request object.
 * @param res - The response object.
 */
function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
}

/**
 * It receives a request and a response, calls the upsert method of the Controller, and then returns a
 * response to the client
 * @param req - The request object.
 * @param res - The response object
 */
function upsert(req, res) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
}

/**
 * It receives a request and a response, calls the upsert method of the Controller, and then returns a
 * response to the client
 * @param req - The request object.
 * @param res - The response object
 */
function upsert(req, res) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
}

module.exports = router;
