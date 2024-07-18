import { ErrorMessage } from "../ErrorMessage";
import { useState } from "react";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
// import { ProfileInformation } from "../ProfileInformation";
import { capitalize, formatPhoneNumber } from "../utils/transformations";

import {
  isEmailValid,
  isCityValid,
  isPhoneValid,
  isNameValid,
} from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ setUserData, userData }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [citiesListInput, setCitiesListInput] = useState([]);
  const [phoneNumberInput, setPhoneNumberInput] = useState(["", "", "", ""]);

  const [inputs, setInPuts] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    if (
      !isEmailValid(emailInput) ||
      !isCityValid(cityInput) ||
      !isPhoneValid(phoneNumberInput) ||
      !isNameValid(firstNameInput) ||
      !isNameValid(lastNameInput)
    ) {
      alert("Bad data Input");
      return;
    }

    setUserData({
      firstName: capitalize(firstNameInput),
      lastName: capitalize(lastNameInput),
      email: emailInput,
      city: capitalize(cityInput),
      phoneNumber: formatPhoneNumber(phoneNumberInput),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input
          placeholder="Bilbo"
          onChange={(e) => {
            e.preventDefault();
            setFirstNameInput(e.target.value);
          }}
          value={firstNameInput}
        />
      </div>
      {!isNameValid(firstNameInput) && isSubmitted && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input
          placeholder="Baggins"
          onChange={(e) => {
            e.preventDefault();
            setLastNameInput(e.target.value);
          }}
          value={lastNameInput}
        />
      </div>
      {!isNameValid(lastNameInput) && isSubmitted && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo@Hobbiton-adventures.com"
          onChange={(e) => {
            e.preventDefault();
            setEmailInput(e.target.value);
          }}
          value={emailInput}
        />
      </div>
      {!isEmailValid(emailInput) && isSubmitted && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          list="cities"
          placeholder="Hobbiton"
          onChange={(e) => {
            e.preventDefault();
            setCityInput(e.target.value);
          }}
          value={cityInput}
        />
      </div>
      {!isCityValid(cityInput) && isSubmitted && (
        <ErrorMessage message={cityErrorMessage} show={true} />
      )}

      <FunctionalPhoneInput
        phoneNumberInput={phoneNumberInput}
        setPhoneNumberInput={setPhoneNumberInput}
      />

      {!isPhoneValid(phoneNumberInput) && isSubmitted && (
        <ErrorMessage message={phoneNumberErrorMessage} show={true} />
      )}

      <input type="submit" value="Submit" />
    </form>
  );
};
