import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);

const mongodb = process.env.CONNECTION_URL;
const port = process.env.PORT || 8000;

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
