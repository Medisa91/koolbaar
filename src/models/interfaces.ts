export interface IRegister {
  personalPhoto: File;
  aboutMe: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  address: string;
  positionLat: number;
  positionLong: number;
  password: string;
  rePassword: string;
  passportPhoto: File;
  secondIdentityPhoto: File;
  clientId: string;
  clientSecret: string;
  deviceModel: string;
  deviceId: string;
  playerId: string;
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

export interface IUserInfo {
  personalPhoto: string;
  aboutMe: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  address: string;
  positionLat: string;
  positionLong: string;
  passportPhoto: string;
  secondIdentityPhoto: string;
  balance: string;
  gateways: IGateway[];
  transactions: ITransaction[];
}

export interface IGateway {
  id: string;
  text: string;
  date: string;
  isActive: boolean;
  imageUrl: string;
}

export interface ITransaction {
  amount: string;
  imageUrl: string;
  insertTime: string;
  number: string;
}

export interface IRequest {
  owner: string;
  offer: string;
  id: string;
  pkgId: string;
  packagetype: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  size: string;
  weight: string;
  itemValue: string;
  shippingDeadline: string;
  deliveryTypes: string;
  description: string;
  location: string;
  images: string[];
  isIdValidation: boolean;
  isProfilePicture: boolean;
  isProofOfAddress: boolean;
  isRating: boolean;
  isSuccessfulTransaction: boolean;
  isValidPassport: boolean;
  userLevel: string;
}

export interface ITraveler {
  fullName: string;
  rating: string;
  aboutMe: string;
  isVerifiedUser: boolean;
  id: string;
  trvId: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  size: number;
  weight: number;
  itemValue: number;
  deliveryTypes: string;
  location: string;
  images: string[];
  isIdValidation: boolean;
  isProfilePicture: boolean;
  isProofOfAddress: boolean;
  isRating: boolean;
  isSuccessfulTransaction: boolean;
  isValidPassport: boolean;
  userLevel: string;
}

export interface DepartureOptions {
  from: string;
  fromDate: string;
  fromTime: string;
}

export interface ArrivalOptions {
  to: string;
  toDate: string;
  toTime: string;
}

export interface Option {
  value: string | number;
  label: string;
}
