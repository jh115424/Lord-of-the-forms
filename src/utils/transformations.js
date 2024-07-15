export const capitalize = (name) => {
const lower = name.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
  

};

// todo: build this function
// `capitalize("jOn")` should output `"Jon"`

export const formatPhoneNumber = (phoneNumber) => {
  return phoneNumber
    .regex(/[^0-9]/g, "")
    .regex(/(\d{3})(\d{3})(\d{3})/g, "$1-$2-$3");

  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
};
