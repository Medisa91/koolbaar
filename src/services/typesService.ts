import { http } from "helpers/httpRequest";

class TypesService {
  getAllPackagesType = () => {
    return http.get("Packagetype");
  };
  
  getAllWeightRange = () => {
    return http.get("Weightrange");
  };

  getAllDeliveryType = () => {
    return http.get("Deliverytype");
  };
}

export default new TypesService();
