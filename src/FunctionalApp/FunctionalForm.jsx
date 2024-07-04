import { ErrorMessage } from "../ErrorMessage";
import { useState } from "react";
// import { PhoneInput } from "../PhoneInput";

import { isEmailValid, isCityValid, isNameValid } from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = (props) => {
  const [userData, setUserData] = useState(null);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input
          placeholder="Bilbo"
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
          value={firstNameInput}
        />
      </div>
      {!isNameValid(firstNameInput) && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}

      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input
          placeholder="Baggins"
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
          value={lastNameInput}
        />
      </div>
      {!isNameValid(lastNameInput) && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          value={emailInput}
        />
      </div>
      {!isEmailValid(emailInput) && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          placeholder="Hobbiton"
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
          value={cityInput}
        />
      </div>
      {!isCityValid(cityInput) && (
        <ErrorMessage message={cityErrorMessage} show={true} />
      )}

      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
   
          <input
            type="text"
            id="phone-input-1"
            placeholder="55"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};

// My recommendation is read through all the requirements once, then focus more on matching 👇 that UI. Then at the end use the checklist to make sure that you covered all of the UI and requirements, this checklist should make more sense as you start coding.

//  Get your code to function EXACTLY like This Site
// Validation UI

//  Under input errors should not show UNLESS the user has already tried submitting once
//  Errors should go away as soon as the field is fixed, not on submit
//  If a user tries to submit a form with bad inputs, an alert message will say "Bad Inputs" then the exact errors will pop up under the incorrect inputs
//  When a user successfully submits the form, it should update the userInformation and show the user information in the ProfileInformation Component
//  First Name should be at least 2 characters long and should not contain numbers
//  Last Name should be at least 2 characters long and should not contain numbers
//  Email should pass the isEmailValid function
//  City should be valid according to the City Information section below
//  You should have a isCityValid function located in validations.ts that returns true or false depending on the input
//  Phone number should be 7 characters long, and every characters should be a number 0-9
//  You should have a isPhoneValid function located in validations.ts that returns true or false depending on the input
// Phone Number UI

//  When you store a phone number in state it should NOT have all the - characters in what you are storing
//  Display a phone number with the format NN-NN-NN-N
// use this function in your ProfileInformation component to render the correct thing to the screen
// Phone Input

//  Create a FunctionalPhoneInput component to clean up code
//  Create a ClassPhoneInput component to clean up code
//  The telephone input should work EXACTLY like on the example site
//  Typing in the max characters on one input should move to the next input
//  Deleting should go to the previous input as necessary
//  Inputs should be tracked with a state that looks like this ["", "", "", ""]
//  A User cannot type any non-numeric characters into a telephone input
// City Information

//  A valid city should be in the list of allCites found in all-cities.ts
//  A valid city does NOT have to be the same casing,"Hobbiton" or "hobbiton" should pass validation
//  Make a isValidCity function that checks to see if an input is a valid city
// Text Inputs

//  Create a FunctionalTextInput component that groups the label and the input together
//  Create a ClassTextInput component to clean up code
// Form

//  Page must NOT reload after submitting
//  ClassApp Code and FunctionalApp Code should be treated as separate apps as far as state goes
// Profile Information Component

// You can share this between the FunctionalApp and the ClassApp

// build a capitalize function in transformations.ts to correctly display a first and last name

//  build a formatPhone function in transformations.ts that will turn "1234567" into "12-34-56-7"

//  use capitalize and formatPHone in the ProfileInformation component in order to format things appropriately

// Email Validations

// You will need to validate that the email is a valid email
// We've provided a function called isEmailValid in validations.ts

// export const FunctionalForm = () => {
//   // const [firstName, setFirstName] = React.useState("");
//   // const [lastName, setLastName] = React.useState("");
//   // const [email, setEmail] = React.useState("");
//   // const [city, setCity] = React.useState("");

//   return (
//     <form>
//       <u>
//         <h3>User Information Form</h3>
//       </u>

//       {/* first name input */}
//       <div className="input-wrap">
//         <label>{"First Name"}:</label>
//         <input placeholder="Bilbo" />
//       </div>
//       <ErrorMessage message={firstNameErrorMessage} show={true} />

//       {/* last name input */}
//       <div className="input-wrap">
//         <label>{"Last Name"}:</label>
//         <input placeholder="Baggins" />
//       </div>
//       <ErrorMessage message={lastNameErrorMessage} show={true} />

//       {/* Email Input */}
//       <div className="input-wrap">
//         <label>{"Email"}:</label>
//         <input placeholder="bilbo-baggins@adventurehobbits.net" />
//       </div>
//       <ErrorMessage message={emailErrorMessage} show={true} />

//       {/* City Input */}
//       <div className="input-wrap">
//         <label>{"City"}:</label>
//         <input placeholder="Hobbiton" />
//       </div>
//       <ErrorMessage message={cityErrorMessage} show={true} />

//       <div className="input-wrap">
//         <label htmlFor="phone">Phone:</label>
//         <div id="phone-input-wrap">
//           <input type="text" id="phone-input-1" placeholder="55" />
//           -
//           <input type="text" id="phone-input-2" placeholder="55" />
//           -
//           <input type="text" id="phone-input-3" placeholder="55" />
//           -
//           <input type="text" id="phone-input-4" placeholder="5" />
//         </div>
//       </div>

//       <ErrorMessage message={phoneNumberErrorMessage} show={true} />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };
