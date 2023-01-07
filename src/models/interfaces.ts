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

export interface IAccount {
  gatewayId: string;
  holderName: string;
  number: string;
  email: string;
  swiftCode: string;
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
  deliveryTypes: string;
  description: string;
  fromCountry: string;
  fromCountryAbbr: string;
  fromCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  fromTime1: string;
  fromTime2: string;
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
  toCountry: string;
  toCountryAbbr: string;
  toCountryCity: string;
  toDate1: string;
  toDate2: string;
  toTime1: string;
  toTime2: string;
  userLevel: string;
  weight: string;
}

export interface ITraveler {
  deliveryTypes: string;
  description: string;
  fromCountry: string;
  fromCountryAbbr: string;
  fromCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  fromTime1: string;
  fromTime2: string;
  images: [];
  isIdValidation: boolean;
  isProfilePicture: boolean;
  isProofOfAddress: boolean;
  isSuccessfulTransaction: boolean;
  isValidPassport: boolean;
  itemValue: string;
  location: string;
  offerPrice: string;
  owner: string;
  packagetypes: string;
  rating: number;
  requests: number;
  shippingDeadline: string;
  size: string;
  sizerange: string;
  toCountry: string;
  toCountryAbbr: string;
  toCountryCity: string;
  toDate1: string;
  toDate2: string;
  toTime1: string;
  toTime2: string;
  trvId: string;
  userLevel: string;
  weight: string;
}

export interface IMyTraveler {
  owner: string;
  offerPrice: string;
  userLevel: string;
  isProfilePicture: boolean;
  isValidPassport: boolean;
  isIdValidation: boolean;
  isProofOfAddress: boolean;
  isSuccessfulTransaction: boolean;
  rating: number;
  requests: number;
  trvId: string;
  packagetype: string;
  sizerange: string;
  fromCountry: string;
  fromCountryAbbr: string;
  fromCountryCity: string;
  toCountry: string;
  toCountryAbbr: string;
  toCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  fromTime1: string;
  fromTime2: string;
  toDate1: string;
  toDate2: string;
  toTime1: string;
  toTime2: string;
  size: string;
  weight: string;
  itemValue: string;
  shippingDeadline: string;
  deliveryTypes: string;
  description: string;
  location: string;
  images: string[];
}

export interface IMyPackages {
  owner: string;
  offerPrice: string;
  userLevel: string;
  isProfilePicture: boolean;
  isValidPassport: boolean;
  isIdValidation: boolean;
  isProofOfAddress: boolean;
  isSuccessfulTransaction: boolean;
  rating: number;
  offers: number;
  pkgId: string;
  packagetype: string;
  fromCountry: string;
  fromCountryAbbr: string;
  fromCountryCity: string;
  toCountry: string;
  toCountryAbbr: string;
  toCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  fromTime1: string;
  fromTime2: string;
  toDate1: string;
  toDate2: string;
  toTime1: string;
  toTime2: string;
  size: string;
  weight: string;
  itemValue: string;
  shippingDeadline: string;
  deliveryTypes: string;
  description: string;
  location: string;
  images: string[];
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

export interface IAddTravel {
  TrvId?: string[];
  packagetypeId: string[];
  packageType: string;
  sizerangeId: string;
  weight: string;
  value: string;
  sizeWidth: string;
  sizeHeight: string;
  sizeLength: string;
  deliverytypeIds: string;
  fromCountry: string;
  fromCountryCity: string;
  toCountry: string;
  toCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  toDate1: string;
  toDate2: string;
  offerPrice: string;
  message: string;
  images: string[];
}

export interface IAddPackage {
  packagetypeId: string;
  packageType: string;
  weight: string;
  value: string;
  sizeWidth: string;
  sizeHeight: string;
  sizeLength: string;
  deliverytypeIds: string;
  fromCountry: string;
  fromCountryCity: string;
  toCountry: string;
  toCountryCity: string;
  fromDate1: string;
  fromDate2: string;
  toDate1: string;
  toDate2: string;
  offerPrice: string;
  message: string;
  images: string[];
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
