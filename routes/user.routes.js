import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user by id", id: req.params.id });
});

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
