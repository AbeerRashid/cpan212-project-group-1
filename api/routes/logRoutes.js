import { Router } from "express";
import { getAllLogs, getLogById, createLog } from "../controllers/logController";
import { validateLog } from '../middleware/validateLog.js';

const routes = Router();

router.get('/', getAllLogs);

router.get('/:id', getLogById);

router.post('/', validateLog, createLog);

export default routes;