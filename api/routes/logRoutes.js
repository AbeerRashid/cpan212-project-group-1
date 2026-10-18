import { Router } from "express";
import { getAllLogs, getLogById } from "../controllers/logController";

const routes = Router();

router.get('/', getAllLogs)

router.get('/', getLogById)

export default routes;