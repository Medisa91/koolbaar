import { http } from "helpers/httpRequest";

class TypesService {
  getAllPackagesType = () => {
    return http.get("Packagetype");
  };
  
  getAllWeightRange = () => {
    return http.get("Weightrange");
  };
}

export default new TypesService();
