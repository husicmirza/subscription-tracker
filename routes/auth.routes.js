import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", (req, res) => {
  res.send({ title: "Sign up" });
});

authRouter.post("/login", (req, res) => {
  res.send({ title: "Log in" });
});

authRouter.post("/logout", (req, res) => {
  res.send({ title: "Log out" });
});

export default authRouter;
