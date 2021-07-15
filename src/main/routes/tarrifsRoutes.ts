import { Router } from "express";
import { getTarrifs } from "../controllers/tarrifsController";
const tarrifsRouter = Router();

tarrifsRouter.get("/", async (req, res) => {
  try {
    console.log(`tarrifsRouter:get: /`);
    // const tarrifs  = await getConfigById(id);
    return res.status(200).json(getTarrifs());
  } catch (err) {
    console.error("tarrifsRouter:get: Error: ", err);
    return res.status(500).json({ Error: err });
  }
});

export default tarrifsRouter;
