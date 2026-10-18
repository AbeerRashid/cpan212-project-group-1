import { Router } from "express";
import { getAllLogs, getLogById, createLog } from "../controllers/logController";
import { validateLog } from '../middleware/validateLog.js';

const router = Router();

router.get('/', getAllLogs);

router.get('/:id', getLogById);

router.post('/', validateLog, createLog);

// PUT and DELETE routes for a specific log ID
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

export default router;