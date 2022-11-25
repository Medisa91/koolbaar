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

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new AuthorizationService();
