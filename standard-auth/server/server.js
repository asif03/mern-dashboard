import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { config } from "./config/oauth";

const app = express();

// Resolve CORS
app.use(
  cors({
    origin: [config.clientUrl],
    credentials: true,
  })
);

// Parse Cookie
app.use(cookieParser());

// Verify auth
const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    jwt.verify(token, config.tokenSecret);
    return next();
  } catch (err) {
    console.error("Error: ", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
