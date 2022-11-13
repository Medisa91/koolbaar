import { http, loginHttp } from "helpers/httpRequest";

class AuthorizationService {
  createUser(data) {
    return http.post("/register", data);
  }

  login(data) {
    return loginHttp.post("/token", data);
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
