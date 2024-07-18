export const capitalize = (name) => {
  const lower = name.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export const formatPhoneNumber = (phoneNumber) => {
  return phoneNumber.join("-");
};
