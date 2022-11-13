export interface IRegister {
  PersonalPhoto: File;
  AboutMe: string;
  FirstName: string;
  LastName: string;
  DisplayName: string;
  PhoneNumber: string;
  Email: string;
  Address: string;
  Position_lat: string;
  Position_long: string;
  Password: string;
  RePassword: string;
  PassportPhoto: File;
  SecondIdentityPhoto: File;
  Client_Id: string;
  Client_Secret: string;
  Device_Model: string;
  Device_Id: number;
  Player_Id: number;
}

export interface ILogin {
  grant_type: string;
  username: string;
  password: string;
  client_id: string;
  client_secret: string;
  device_model: string;
  device_id: string;
  player_id: string;
}

export interface DepartureOptions {
  from: string;
  fromDate: string;
}

export interface ArrivalOptions {
  to: string;
  toDate: string;
}

export interface Option {
  value: string | number;
  label: string;
}
