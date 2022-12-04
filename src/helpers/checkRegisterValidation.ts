import checkEmail from "helpers/checkEmail";

export const isValidFirstName = (firstName) => {
  if (firstName === "") return false;
  else return true;
};
export const isValidLastName = (lastName) => {
  if (lastName === "") return false;
  else return true;
};
export const isValidDisplayName = (displayName) => {
  if (displayName === "") return false;
  else return true;
};
export const isValidPhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") return false;
  else return true;
};
export const isValidEmail = (email) => {
  if (email === "") return false;
  else return true;
};
export const isValidFormatEmail = (email) => {
  if (email !== "" && !checkEmail(email)) return false;
  else return true;
};
export const isValidPassword = (password) => {
  if (password === "") return false;
  else return true;
};
export const isValidRePassword = (rePassword) => {
  if (rePassword === "") return false;
  else return true;
};
export const isMatchPasswords = (rePassword, password) => {
  if (rePassword !== "" && rePassword !== password) return false;
  else return true;
};
