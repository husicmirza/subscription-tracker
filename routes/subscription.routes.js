import express from "express";

const subscriptionRouter = express.Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription by id", id: req.params.id });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription by id", id: req.params.id });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscription by id", id: req.params.id });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({
    title: "GET all subscriptions for user by id",
    id: req.params.id,
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscription by id", id: req.params.id });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET all upcoming renewals" });
});

export default subscriptionRouter;
