import { Router } from "express";
import { getAllLogs, getLogById, createLog } from "../controllers/logController";

const routes = Router();

router.get('/', getAllLogs);

router.get('/:id', getLogById);

router.post('/', createLog);

export default routes;