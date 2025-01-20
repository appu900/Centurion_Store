import { Request, Response, NextFunction } from "express";
import userRepository from "./userRepository";
import UserRepository from "./userRepository";
import User from "./model/user";

const repository = new UserRepository(User);

export const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const paylaod = req.body;
    const response = await repository.create(paylaod);
    res.status(200).json({ message: "User created successfully", response });
  } catch (error) {
    return next(error);
  }
};
