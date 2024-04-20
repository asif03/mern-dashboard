import express from "express";
import { checkUser, signup, login } from "../controllers/user.js";
import { sendOtp } from "../utils/email.js";

const router = express.Router();

router.get("/check-user", checkUser);
router.post("/signup", signup);
router.post("/send-otp", sendOtp);
router.post("/login", login);

export default router;
