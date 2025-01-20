import { Application } from "express";
import { Config } from ".";
import app from "../app";
import logger from "./logger";
import makeDatabaseConnection from "./database";

class ApplicationServer {
  public app: Application;
  public PORT: number = Config.PORT ? parseInt(Config.PORT) : 5000;

  constructor(port?: number) {
    this.app = app;
    this.PORT = port ?? this.PORT;
  }

  async start() {
    try {
      await makeDatabaseConnection();
      this.app.listen(this.PORT, () => {
        console.log(`Server started on port ${this.PORT}`);
        logger.info(`Server started on port ${this.PORT}`);
      });
    } catch (error) {
      logger.error(`Error starting server: ${error}`);
      process.exit(1);
    }
  }
}

export default ApplicationServer;



