import { authorizedHttp, authorizedFormDataHttp } from "helpers/httpRequest";

class DashboardService {
  getDashboard() {
    return authorizedHttp.get("/user/Dashboard");
  
  }
  getTravelById(id) {
    return authorizedHttp.get(`/user/Travel/GetByTrvId/${id}`);
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

  addNewTravel(data) {
    return authorizedFormDataHttp.post("/user/Travel/New", data);
  }

  editNewTravel(data) {
    return authorizedFormDataHttp.put("/user/Travel/Edit", data);
  }
}

export default new DashboardService();
