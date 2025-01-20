import mongoose from "mongoose";
import CurdRepository from "../../shared/repository/crud";

class UserRepository extends CurdRepository {
  constructor(model: mongoose.Model<any>) {
    super(model);
  }
}

export default UserRepository;
