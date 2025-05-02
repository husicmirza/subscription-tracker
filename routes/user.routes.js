import express from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE user by id", id: req.params.id });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE user by id", id: req.params.id });
});

export default userRouter;
