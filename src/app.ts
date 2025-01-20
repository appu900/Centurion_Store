import express, { Request, Response } from "express";

const app = express();

app.get("/ping", (req, res) => {
  res.send("centurion store server pinged");
});

export default app;
