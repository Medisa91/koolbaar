import { http } from "helpers/httpRequest";

class FlightsService {
  flightInquiry(data) {
    return http.post("/Flight/Inquiry", data);
  }

  getHomeFilter(data) {
    return http.post("/HomeFilter", data);
  }

  getHomeTravelerByTravelId(data) {
    return http.get("/HomeTraveler/GetByTravelId", data);
  }

  getHomeRequestByTravelInfo(data) {
    return http.post("/HomeRequest/FilterByTravelInformation", data);
  }
}

export default new FlightsService();
