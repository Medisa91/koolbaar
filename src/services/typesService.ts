import { http } from "helpers/httpRequest";

class TypesService {
  getAllPackagesType = () => {
    return http.get("Packagetype");
  };
}

export default new TypesService();
