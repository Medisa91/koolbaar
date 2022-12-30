import { http, authorizedHttp, registerHttp } from "helpers/httpRequest";

class AuthorizationService {
  createUser(data) {
    return registerHttp.post("/register", data);
  }

  login(data) {
    return http.post("/token", data);
  }

  logout(data) {
    return authorizedHttp.post("/Logout", data);
  }

  checkToken(data) {
    return http.post("/ExternalAuth/CheckToken", data);
  }

  getUserInfo() {
    return authorizedHttp.get("/user/UserInfo");
  }

  editUserInfo(data) {
    return authorizedHttp.put("/user/UserInfo/Edit", data);
  }
}

export default new AuthorizationService();
