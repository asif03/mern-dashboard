import express from "express";
import { getUrl, getToken, login, logout } from "../controllers/oauth.js";

const router = express.Router();

router.get("/url", getUrl);
router.get("/token", getToken);
router.get("/logged_in", login);
router.post("/logout", logout);

export default router;
