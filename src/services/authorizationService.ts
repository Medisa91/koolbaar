import { http, loginHttp, registerHttp } from "helpers/httpRequest";

class AuthorizationService {
  createUser(data) {
    return registerHttp.post("/register", data);
  }

  login(data) {
    return loginHttp.post("/token", data);
  }

  logout(data) {
    return http.post("/Logout", data);
  }

  checkToken(data) {
    return loginHttp.post("/ExternalAuth/CheckToken", data);
  }

  //   getAll() {
  //     return http.get("/tutorials");
  //   }

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
