import express, { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import logger from "./config/logger";
import { handleCreateUser } from "./domain/user/userHandler";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("centurion store server pinged");
});

app.post("/users", handleCreateUser);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
      },
    ],
  });
});

export default app;
