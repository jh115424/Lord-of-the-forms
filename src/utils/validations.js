import allCities from "./all-cities";

export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const isNameValid = (name) => {
  return name.length >= 2;
};

export const isCityValid = (city) => {
  return allCities.includes(city);
};

export const isPhoneValid = (phone) => {
  return phone.join("").length === 7;
};
