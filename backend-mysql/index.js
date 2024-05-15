import express from "express";
import taskRoutes from "./routes/tasks.js";

const app = express();

const port = process.env.PORT || 8000;

app.use("/", taskRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
