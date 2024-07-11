export const capitalize = (value) => {
  const firstLetter = value.charAt(0).toUpperCase();
  const restOfLetters = value.slice(1);
  return firstLetter + restOfLetters;

  // todo: build this function
  // `capitalize("jOn")` should output `"Jon"`
};

export const formatPhoneNumber = (value) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
};
