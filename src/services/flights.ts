import { http } from "helpers/httpRequest";

class FlightsService {
  flightInquiry(data) {
    return http.post("/Flight/Inquiry", data);
  }

  getHomeRequest(data) {
    return http.post("/HomeRequest", data);
  }

  getHomeTraveler(data) {
    return http.post("/HomeTraveler", data);
  }

  getHomeTravelerByTravelId(data) {
    return http.get("/HomeTraveler/GetByTravelId", data);
  }

  getHomeRequestByTravelInfo(data) {
    return http.post("/HomeRequest/FilterByTravelInformation", data);
  }
}

export default new FlightsService();
