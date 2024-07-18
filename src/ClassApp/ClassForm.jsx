import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
// import { ProfileInformation } from "../ProfileInformation";
// import { capitalize} from "../utils/transformations";
// import { ClassPhoneInput } from "./ClassPhoneInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

import {
  isCityValid,
  isEmailValid,
  isPhoneValid,
  isNameValid,
} from "../utils/validations";

export class ClassForm extends Component {
  constructor(props) {
    const { handleUserInformation } = props;
    super(props);
    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      emailInput: "",
      cityInput: "",
      isSubmitted: false,
      phoneNumberInput: ["", "", "", ""],
    };
  }
  render() {
    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      isSubmitted,
      phoneNumberInput,
      // setPhoneNumberInput,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
              this.setState({
                firstNameInput: e.target.value,
              });
              this.setState({
                isSubmitted: true,
              });
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
              this.setState({
                lastNameInput: e.target.value,
              });
              this.setState({
                isSubmitted: true,
              });
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
            placeholder="bilbo-baggins@adventurehobbits.net"
            onChange={(e) => {
              e.preventDefault();
              this.setState({
                emailInput: e.target.value,
              });
              this.setState({
                isSubmitted: true,
              });
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
              this.setState({
                cityInput: e.target.value,
              });
              this.setState({
                isSubmitted: true,
              });
            }}
            value={cityInput}
          />
        </div>
        {!isCityValid(cityInput) && isSubmitted && (
          <ErrorMessage message={cityErrorMessage} show={true} />
        )}

        {/* <ClassPhoneInput
        phoneNumberInput={phoneNumberInput}
        setPhoneNumberInput={setPhoneNumberInput}
        /> */}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input type="text" id="phone-input-1" placeholder="55" />
            -
            <input type="text" id="phone-input-2" placeholder="55" />
            -
            <input type="text" id="phone-input-3" placeholder="55" />
            -
            <input type="text" id="phone-input-4" placeholder="5" />
          </div>
        </div>

        {!isPhoneValid(phoneNumberInput) && isSubmitted && (
          <ErrorMessage message={phoneNumberErrorMessage} show={true} />
        )}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
