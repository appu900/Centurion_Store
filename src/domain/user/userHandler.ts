import { Request, Response, NextFunction } from "express";
import userRepository from "./userRepository";
import UserRepository from "./userRepository";
import User from "./model/user";
import mongoose from "mongoose";
import createHttpError from "http-errors";

const repository = new UserRepository(User);

export const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const response = await repository.create(payload);
    res.status(200).json({ message: "User created successfully", response });
  } catch (error) {
    next(error);
  }
};

export const handleUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await repository.FindByFeild({ email });
    if (!user) {
      return next(new createHttpError.NotFound("User not found"));
    }
    const isPasswordMatch = user.comparePassword(password);
    if (!isPasswordMatch) {
      return next(new createHttpError.Unauthorized("Invalid credentials"));
    }
    const token = user.generateJwt();
    res
      .status(200)
      .json({ message: "User logged in successfully", token: token });
  } catch (error) {
    next(error);
  }
};
