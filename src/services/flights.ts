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
}

export default new FlightsService();
