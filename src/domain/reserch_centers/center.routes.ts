import express from "express";
import { getAllCenters, handleCreateCenter } from "./centerHandler";
const router = express.Router();

router.post("/", handleCreateCenter);
router.get("/", getAllCenters);

export default router;
