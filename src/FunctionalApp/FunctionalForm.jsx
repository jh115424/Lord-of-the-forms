import { ErrorMessage } from "../ErrorMessage";
import { useState } from "react";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { ProfileInformation } from "../ProfileInformation";

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
  // const [userData, setUserData] = useState(null);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [citiesListInput, setCitiesListInput] = useState([]);
  const [phoneNumberInput, setPhoneNumberInput] = useState(["", "", "", ""]); //piece of state

  const [inputs, setInPuts] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // how do verify our inputs for the error messages and can we do that or something similar here?
    // check if all inputs are valid
    // if they aren't, then we can alert AND prevent the updating of the userData
    // alert("Bad data Input");

    setIsSubmitted(true);

    if (!userData) {
      // second option
      alert("Bad data Input");
      setUserData({
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        city: cityInput,
        phoneNumber: phoneNumberInput,
      });
      setUserData(userData);
    }
    setIsSubmitted(true);




    

    // alert("Bad data Input");
    // if all is ok, then we can update just fine

    // setIsSubmitted(true);

    // setUserData({                   // original option
    //   firstName: firstNameInput,
    //   lastName: lastNameInput,
    //   email: emailInput,
    //   city: cityInput,
    //   phoneNumber: phoneNumberInput,
    // });
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

//import components only if you want to return them from the function
//setState changes the state object
//javascript can be passed as props using {} .   ex. setData = {pizza} userData={food}
