/* Modules */
import "@babel/polyfill";
import express from "express";
import morgan from "morgan";

/* DB */
import MongoReporteDeGastos from "./libs/reporte_de_gastos_db";

/* Middlewares */
import { corsCheck } from "./routes/middlewares/cors";

/* Routes */
import routes from "./routes/index.routes";

/* Initialization */
const app = express();
const db = MongoReporteDeGastos.MongoReporteDeGastos.connection;
import "./database";

/* Settings */
app.set("port", process.env.PORT || 3001);

/* Middlewares */
app.use(morgan("dev"));
app.use(corsCheck);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("trust proxy", true);

/* Routes */
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/api", routes);

/* Starting app */
const port = app.get("port");

app.listen(port, (req, res) => {
  console.log("server on port", port);
  console.log("new version executing");
});
