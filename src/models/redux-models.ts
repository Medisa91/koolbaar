export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoArrayModel {
  all_todos: TodoModel[];
  particular_todo: TodoModel;
}

export interface IRegister {
  personalPhoto: File;
  aboutMe: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  address: string;
  position_lat: string;
  position_long: string;
  password: string;
  rePassword: string;
  passportPhoto: File;
  secondIdentityPhoto: File;
  client_Id: string;
  client_Secret: string;
  device_Model: string;
  device_Id: number;
  player_Id: number;
}
