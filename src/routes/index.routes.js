/* Modules */
import { Router } from "express";

/* Routes */
import reporte_routes from "./reporte.routes";

/* Initialization */
const router = Router();

/* External routes */
router.use("/reporte", reporte_routes);

/* Routes */
router.get("/", (req, res) => {
  res.status(200).send({
    message: "Index route",
  });
});

export default router;
