import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import oauthRoutes from "./routes/oauth.js";
import postRoutes from "./routes/posts.js";

//import { config } from "./controllers/oauth.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    //origin: [config.clientUrl],
    origin: true,
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Parse Cookie
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/auth", oauthRoutes);
app.use("/posts", postRoutes);

const mongodb = process.env.CONNECTION_URL || "mongodb://localhost:27017/mern";
const port = process.env.PORT || 5000;

mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    })
  )
  .catch((error) => console.log(error.message));

mongoose.set("strict", false);
