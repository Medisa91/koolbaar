export interface IRegister {
  personalPhoto: File;
  aboutMe: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: number;
  email: string;
  address: string;
  positionLat: string;
  positionLong: string;
  password: string;
  rePassword: string;
  passportPhoto: File;
  secondIdentityPhoto: File;
  clientId: string;
  clientSecret: string;
  deviceModel: string;
  deviceId: number;
  playerId: number;
}

export interface ILogin {
  grantType: string;
  username: string;
  password: string;
  clientId: string;
  clientSecret: string;
  deviceModel: string;
  deviceId: string;
  playerId: string;
}

export interface IExternalLogin {
  provider: string;
  accessToken: string;
  email: string;
  deviceModel: string;
  deviceId: string;
  playerId: string;
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
