import checkEmail from "helpers/checkEmail";

export const isValidFirstName = (firstName) => firstName !== "";

export const isValidLastName = (lastName) => lastName !== "";

export const isValidDisplayName = (displayName) => displayName !== "";

export const isValidPhoneNumber = (phoneNumber) => phoneNumber !== "";
export const isValidPhoneNumberLength = (phoneNumber) => phoneNumber?.length === 10;

export const isValidEmail = (email) => email !== "";

export const isValidPassword = (password) => password !== "";

export const isValidRePassword = (rePassword) => rePassword !== "";

export const isValidFormatEmail = (email) => {
  if (email !== "" && !checkEmail(email)) return false;
  return true;
};

export const isMatchPasswords = (rePassword, password) => {
  if (rePassword !== "" && rePassword !== password) return false;
  return true;
};

export const isValid = (checked, registerData) =>
  checked &&
  isValidFirstName(registerData.firstName) &&
  isValidLastName(registerData.lastName) &&
  isValidDisplayName(registerData.displayName) &&
  isValidPhoneNumber(registerData.phoneNumber) &&
  isValidPhoneNumberLength(registerData.phoneNumber) &&
  isValidEmail(registerData.email) &&
  isValidFormatEmail(registerData.email) &&
  isValidPassword(registerData.password) &&
  isValidRePassword(registerData.rePassword) &&
  isMatchPasswords(registerData.rePassword, registerData.password);
