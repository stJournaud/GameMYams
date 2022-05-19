import express from "express";
import pastriesController from "../controllers/pastriesController";

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

router.get('/pastries', pastriesController);

export default router;