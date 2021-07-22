/* Modules */
const dotenv = require("dotenv");

/* Init */
dotenv.config();

module.exports = {
  ENVIRONMENT: process.env.NODE_ENV,
  MONGO_URL_DEV: process.env.MONGO_URL_DEV,
  MONGO_URL_PROD: process.env.MONGO_URL_PROD,
  MONGO_POOL_SIZE: process.env.MONGO_POOL_SIZE,
};
