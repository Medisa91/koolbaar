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

  getAllSizeRange = () => {
    return http.get("Sizerange");
  };
}

export default new TypesService();
