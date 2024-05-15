import express from "express";
import { getTaskList } from "../controllers/task.controller.js";

const router = express.Router();

router.get("/tasks", getTaskList);

export default router;
