import { authorizedHttp, authorizedFormDataHttp } from "helpers/httpRequest";

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

  addNewTravel(data) {
    return authorizedFormDataHttp.post("/user/Travel/New", data);
  }

  getTravelById(id) {
    return authorizedHttp.get(`/user/Travel/GetByTrvId/${id}`);
  }

  editNewTravel(data) {
    return authorizedFormDataHttp.put("/user/Travel/Edit", data);
  }

  removeTravel(id) {
    return authorizedHttp.delete(`/user/Travel/DelByTrvId/${id}`);
  }

  addNewPackage(data) {
    return authorizedFormDataHttp.post("/user/Package/New", data);
  }

  getPackageById(id) {
    return authorizedHttp.get(`/user/Package/GetByPkgId/${id}`);
  }
  editNewPackage(data) {
    return authorizedFormDataHttp.put("/user/Package/Edit", data);
  }

  removePackage(id) {
    return authorizedHttp.delete(`/user/Package/DelByPkgId/${id}`);
  }

  getRequestTimeline(id) {
    return authorizedHttp.get(`/user/Request/GetTimelineByReqId/${id}`);
  }

  getOfferTimeline(id) {
    return authorizedHttp.get(`/user/Offer/GetTimelineByOffId/${id}`);
  }

}

export default new DashboardService();
