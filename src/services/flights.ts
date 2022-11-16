import { http } from "helpers/httpRequest";

class FlightsService {
  flightInquiry(data) {
    return http.post("/Flight/Inquiry", data);
  }
}

export default new FlightsService();
