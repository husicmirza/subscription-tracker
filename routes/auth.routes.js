import express from "express";
import { signUp, signIn, signOut } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);

authRouter.post("/login", signIn);

authRouter.post("/logout", signOut);

export default authRouter;
