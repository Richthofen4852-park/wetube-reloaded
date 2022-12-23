import express from "express";
import { join } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search)

export default globalRouter;