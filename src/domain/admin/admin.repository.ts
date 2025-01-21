import CurdRepository from "../../shared/repository/crud";
import admin from "./model/admin";

class Adminrepository extends CurdRepository {
  constructor() {
    super(admin);
  }
}

export default Adminrepository;
