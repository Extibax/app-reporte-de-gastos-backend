/* Modules */
import { Mongoose } from "mongoose";

/* Keys */
import config from "../config";

/* Consts */
const { ENVIRONMENT, MONGO_URL_DEV, MONGO_URL_PROD, MONGO_POOL_SIZE } = config;
const MongoReporteDeGastos = new Mongoose();
const IS_PROD = ENVIRONMENT === "prod" ? true : false;
const MAINTENANCE_MODE = false;
const POOL_SIZE = MONGO_POOL_SIZE;

// Do not connect to MongoDB when in maintenance mode
if (MAINTENANCE_MODE !== "true") {
  const commonOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  const mongooseOptions = !IS_PROD
    ? commonOptions
    : {
        keepAlive: 120,
        connectTimeoutMS: 40000,
        ...commonOptions,
      };

  if (POOL_SIZE) mongooseOptions.poolSize = Number(POOL_SIZE);

  const NODE_DB_URI = ENVIRONMENT === "dev" ? MONGO_URL_DEV : MONGO_URL_PROD;

  MongoReporteDeGastos.set("useFindAndModify", false);

  MongoReporteDeGastos.connect(NODE_DB_URI, mongooseOptions)
    .then(() => console.log("Connected with Mongoose."))
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = {
  MongoReporteDeGastos,
};
