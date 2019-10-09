const Routes = require("express").Router();

const authMiddleware = require("./app/middlewares/auth");

const SessionController = require("./app/controllers/SessionController");

Routes.post("/sessions", SessionController.store);

Routes.use(authMiddleware);

Routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = Routes;
