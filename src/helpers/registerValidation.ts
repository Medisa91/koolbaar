import checkEmail from "helpers/checkEmail";

export const isValidFirstName = (firstName) => {
  if (firstName === "") return false;
  else return true;
};
export const isValidLastName = (lastName) => lastName !== "";

export const isValidDisplayName = (displayName) => {
  if (displayName === "") return false;
  return true;
};
export const isValidPhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") return false;
  return true;
};
export const isValidEmail = (email) => {
  if (email === "") return false;
  return true;
};
export const isValidFormatEmail = (email) => {
  if (email !== "" && !checkEmail(email)) return false;
  return true;
};
export const isValidPassword = (password) => {
  if (password === "") return false;
  return true;
};
export const isValidRePassword = (rePassword) => {
  if (rePassword === "") return false;
  return true;
};
export const isMatchPasswords = (rePassword, password) => {
  if (rePassword !== "" && rePassword !== password) return false;
  return true;
};

export const isValid = (checked, registerData) =>
  !checked ||
  !isValidFirstName(registerData.firstName) ||
  !isValidLastName(registerData.lastName) ||
  !isValidDisplayName(registerData.displayName) ||
  !isValidPhoneNumber(registerData.phoneNumber) ||
  !isValidEmail(registerData.email) ||
  !isValidFormatEmail(registerData.email) ||
  !isValidPassword(registerData.password) ||
  !isValidRePassword(registerData.rePassword) ||
  !isMatchPasswords(registerData.rePassword, registerData.password);
