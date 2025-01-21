import CurdRepository from "../../shared/repository/crud";
import center from "./model/centers";

class CenterRepository extends CurdRepository {
  constructor() {
    super(center);
  }
}

export default CenterRepository;
