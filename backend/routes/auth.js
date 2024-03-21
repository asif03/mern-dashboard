import express from "express";
import { login, logout } from "../controllers/auth.js";

const router = express.Router();

router.get("/auth/logged_in", login);
router.post("/logout", logout);

export default router;
