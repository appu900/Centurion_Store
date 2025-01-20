import mongoose from "mongoose";
import logger from "./logger";
import { Config } from ".";

export default async function makeDatabaseConnection() {
  try {
    if (!Config.dbString) {
      throw new Error("Database connection string is not defined");
    }
    await mongoose.connect(Config.dbString);
    console.log("Connected to database");
    logger.info("Connected to database");
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
    logger.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
}
