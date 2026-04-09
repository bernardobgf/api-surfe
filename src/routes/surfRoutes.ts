import { Router, type Request, type Response } from "express";
import { getConditions } from "../controllers/surfController.js";

const router = Router();

router.get("/conditions", getConditions);

export { router };
