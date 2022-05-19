import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/index");
  });

router.get("/login", (req, res) => {
    res.render("login/login");
  });

router.get("/register", (req, res) => {
    res.render("login/register");
  });

router.get("/game", (req, res) => {
    res.render("game/game");
  });

router.get("/wins", (req, res) => {
    res.render("wins/wins");
  });

export default router;