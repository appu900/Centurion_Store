import { config } from "dotenv";
config();

const { PORT, MONGO_URI } = process.env;

export const Config = {
  PORT,
  dbString: MONGO_URI,
};
