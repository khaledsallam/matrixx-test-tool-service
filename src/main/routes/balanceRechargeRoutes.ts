import { Router } from "express";
import { rechargeBalance } from "../controllers/balanceRechargeController";
const balanceRechargeRouter = Router();

balanceRechargeRouter.get("/", async (req, res) => {
  try {
    console.log(`balanceRechargeRouter:get: /`);
    const { msisdn, activationCode } = req.query;
    if (
      msisdn &&
      typeof msisdn === "string" &&
      activationCode &&
      typeof activationCode === "string"
    ) {
      await rechargeBalance(msisdn, activationCode);
      return res.status(200).end();
    }
    return res.status(500).json({ Error: "Missing parameters" });
  } catch (err) {
    console.error("balanceRechargeRouter:get: Error: ", err);
    return res.status(err.errCode).json({ Error: err.errMsg });
  }
});

export default balanceRechargeRouter;
