import { Router } from "express";
import { getLogs } from "../../controllers/loggin-controller";
const router = Router();

router.get("/", getLogs);

export default router;
