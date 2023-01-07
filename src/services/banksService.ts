import { authorizedHttp } from "helpers/httpRequest";

class BanksService {
  getAllGateways() {
    return authorizedHttp.get("/user/Gateway/All");
  }

  addNewBankAccount(data) {
    return authorizedHttp.post("/user/BankAccount/New", data);
  }

  getAllBankAccounts() {
    return authorizedHttp.get("/user/BankAccount/All");
  }

  editBankAccount(data) {
    return authorizedHttp.put("/user/BankAccount/Edit", data);
  }

  deleteBankAccount(id) {
    return authorizedHttp.delete(`/user/BankAccount/DelById/${id}`);
  }

}

export default new BanksService();
