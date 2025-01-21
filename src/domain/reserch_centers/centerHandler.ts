import { Request, Response, NextFunction } from "express";
import CenterRepository from "./research_repo";

const repository = new CenterRepository();

export const handleCreateCenter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const response = await repository.create({ name, description });
    res.status(201).json({
      message: "Center created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCenters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await repository.findAll();
    res.status(200).json({
      message: "fetched All centers",
      response,
    });
  } catch (error) {
    next(error);
  }
};
