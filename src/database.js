/* Modules */
import mongoose from "mongoose";
import config from "./config";

const { ENVIRONMENT, MONGO_URL_DEV, MONGO_URL_PROD } = config;

async function run() {
  try {
    const connection = await mongoose.connect(
      ENVIRONMENT ? MONGO_URL_DEV : MONGO_URL_PROD,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("database is conected");
  } catch (error) {
    console.log("start_connection", "catch", "error:", error);
    console.log("database error", error);
  }
}

run().catch((error) => console.error(error));
