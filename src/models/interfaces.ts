export interface IRegister {
  personalPhoto: any;
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

export interface IFlightInquiry {
  fromLocation: string;
  fromDate: string;
  fromTime: string;
  toLocation: string;
  toDate: string;
  toTime: string;
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
  offerPrice: string;
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

export interface IMyTraveler {
  arrivalDate: string;
  arrivalTime: string;
  deliveryTypes: string;
  departureDate: string;
  departureTime: string;
  description: string;
  fromCity: string;
  fromCountry: string;
  fromCountryAbbr: string;
  images: string[];
  isIdValidation: boolean;
  isProfilePicture: boolean;
  isProofOfAddress: boolean;
  isSuccessfulTransaction: boolean;
  isValidPassport: boolean;
  itemValue: string;
  location: string;
  offerPrice: string;
  owner: string;
  packagetype: string;
  rating: number;
  requests: number;
  shippingDeadline: string;
  size: string;
  toCity: string;
  toCountry: string;
  toCountryAbbr: string;
  trvId: string;
  userLevel: string;
  weight: string;
}

export interface IMyPackages {
  arrivalDate: string;
  arrivalTime: string;
  deliveryTypes: string;
  departureDate: string;
  departureTime: string;
  description: string;
  fromCity: string;
  fromCountry: string;
  fromCountryAbbr: string;
  images: string[];
  isIdValidation: boolean;
  isProfilePicture: boolean;
  isProofOfAddress: boolean;
  isSuccessfulTransaction: boolean;
  isValidPassport: boolean;
  itemValue: string;
  location: string;
  offerPrice: string;
  offers: number;
  owner: string;
  packagetype: string;
  pkgId: string;
  rating: number;
  shippingDeadline: string;
  size: string;
  toCity: string;
  toCountry: string;
  toCountryAbbr: string;
  userLevel: string;
  weight: string;
}

export interface IOfferSent {
  arrivalDate: string;
  arrivalTime: string;
  daysLeft: string;
  daysLeftHex: string;
  departureDate: string;
  departureTime: string;
  fromCity: string;
  fromCountry: string;
  fromCountryAbbr: string;
  id: string;
  itemValue: string;
  message: string;
  offId: string;
  offerPrice: string;
  owner: string;
  packagetype: string;
  shippingDeadline: string;
  size: string;
  status: string;
  statusHex: string;
  toCity: string;
  toCountry: string;
  toCountryAbbr: string;
  weight: string;
}

export interface IOfferReceived {
  arrivalDate: string;
  arrivalTime: string;
  daysLeft: string;
  daysLeftHex: string;
  departureDate: string;
  departureTime: string;
  fromCity: string;
  fromCountry: string;
  fromCountryAbbr: string;
  id: string;
  itemValue: string;
  message: string;
  offerPrice: string;
  owner: string;
  packagetype: string;
  reqId: string;
  shippingDeadline: number;
  size: string;
  status: string;
  statusHex: string;
  toCity: string;
  toCountry: string;
  toCountryAbbr: string;
  weight: string;
}

export interface ITravelInformation {
  fromCityCountry: string;
  departureDate: string;
  toCityCountry: string;
  arrivalDate: string;
}

export interface IFlightOptions {
  fromLocation: string;
  fromDate: string;
  fromTime: string;
  toLocation: string;
  toDate: string;
  toTime: string;
}

export interface DepartureOptions {
  fromLocation: string;
  fromDate: string;
  fromTime: string;
}

export interface ArrivalOptions {
  toLocation: string;
  toDate: string;
  toTime: string;
}

export interface Option {
  value: string | number;
  label: string;
}
