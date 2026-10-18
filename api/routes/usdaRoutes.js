import { Router } from "express";
import { searchFood } from "../controllers/usdaController";

const router = Router();

// GET /api/usda/search?query=banana
router.get('/search', searchFood);

export default router;