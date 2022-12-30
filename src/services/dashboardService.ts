import { authorizedHttp } from "helpers/httpRequest";

class DashboardService {
  getDashboard() {
    return authorizedHttp.get("/user/Dashboard");
  }
  
  getAllChangedStatus() {
    return authorizedHttp.get("/user/Changestatus/All");
  }
  
  changeOfferStatus(data) {
    return authorizedHttp.post("/user/Offer/ChangeStatus", data);
  }

  changeRequestStatus(data) {
    return authorizedHttp.post("/user/Request/ChangeStatus", data);
  }

  sendUserAgreement(data) {
    return authorizedHttp.post("/user/Agreement", data);
  }
}

export default new DashboardService();
