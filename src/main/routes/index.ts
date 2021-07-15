import { Router } from "express";
import environment from "../environment";

import tarrifsRouter from "./tarrifsRoutes";
import balanceRechargeRouter from "./balanceRechargeRoutes";

const routes = Router();
routes.get("/", (req, res) => {
  res.send(`Hello from ${environment.app.name}`);
});

routes.use("/tarrifs", tarrifsRouter);
routes.use("/recharge", balanceRechargeRouter);

export default routes;
