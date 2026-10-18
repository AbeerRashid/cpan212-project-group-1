import { Router } from "express";
import { addMealToLog } from "../controllers/mealController.js";

const router = Router();

// POST /api/logs/:logId/meals
router.post('/:logId/meals', addMealToLog);

export default router;