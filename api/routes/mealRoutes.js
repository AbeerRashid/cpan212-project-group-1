import { Router } from "express";
import { addMealToLog } from "../controllers/mealController";

const routes = Router();

// POST /api/logs/:logId/meals
Router.post('/:logId/meals', addMealToLog);

export default routes;