import express, { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import logger from "./config/logger";
import UserRouter from "./domain/user/user.routes";
import CenterRouter from "./domain/reserch_centers/center.routes";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("centurion store server pinged");
});

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/centers", CenterRouter);

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
