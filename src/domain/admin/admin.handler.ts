import { Request, Response, NextFunction } from "express";
import Adminrepository from "./admin.repository";
import createHttpError from "http-errors";

const repository = new Adminrepository();

export const handleCreateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, centerName } = req.body;
    const response = await repository.create({
      name,
      email,
      password,
      centerName,
    });
    res.status(201).json({
      message: "Admin created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const handleAdminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const admin = await repository.FindByFeild({ email });
    if (!admin) {
      return next(new createHttpError.NotFound("Admin not found"));
    }
    const isPasswordMatch = admin.comparePassword(password);
    if (!isPasswordMatch) {
      return next(new createHttpError.Unauthorized("Invalid credentials"));
    }

    const token = admin.generateJwt();
    res.status(200).json({
      message: "Admin logged in successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};
