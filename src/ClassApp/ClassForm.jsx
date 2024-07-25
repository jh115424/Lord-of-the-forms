import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { capitalize, formatPhoneNumber } from "../utils/transformations";
import { ClassPhoneInput } from "./ClassPhoneInput";

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
    const { handleUserInformation, setIsSubmitted } = props;
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

  handlePhoneNumberInput = (phoneNumber) => {
    this.setState({
      phoneNumberInput: phoneNumber,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      isSubmitted: true,
    });

    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      setIsSubmitted,
      phoneNumberInput,
    } = this.state;

    const { setUserData } = this.props;

    if (
      !isEmailValid(emailInput) ||
      !isCityValid(cityInput) ||
      !isPhoneValid(phoneNumberInput) ||
      !isNameValid(firstNameInput) ||
      !isNameValid(lastNameInput)
    ) {
      alert("Bad data Input");
      return;
    } else {
      setUserData({
        firstName: capitalize(firstNameInput),
        lastName: capitalize(lastNameInput),
        email: emailInput,
        city: capitalize(cityInput),
        phoneNumber: formatPhoneNumber(phoneNumberInput),
      });
    }
  };

  render() {
    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      cityInput,
      phoneNumberInput,
      isSubmitted,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>User Information Form</h3>

        {/* first name input */}
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input
            placeholder="Bilbo"
            onChange={(e) => {
              e.preventDefault();
              this.setState({
                firstNameInput: e.target.value,
                setFirstNameInput: e.target.value,
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
                setLastNameInput: e.target.value,
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
            }}
            value={cityInput}
          />
        </div>
        {!isCityValid(cityInput) && isSubmitted && (
          <ErrorMessage message={cityErrorMessage} show={true} />
        )}

        <ClassPhoneInput
          phoneNumberInput={phoneNumberInput}
          handlePhoneNumberInput={this.handlePhoneNumberInput}
        />

        {!isPhoneValid(phoneNumberInput) && isSubmitted && (
          <ErrorMessage message={phoneNumberErrorMessage} show={true} />
        )}

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
