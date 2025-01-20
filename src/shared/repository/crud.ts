import mongoose, { Mongoose } from "mongoose";

class CurdRepository {
  private model: mongoose.Model<any>;
  constructor(model: mongoose.Model<any>) {
    this.model = model;
  }

  async create(data: any) {
    try {
      return await this.model.create(data);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default CurdRepository;
