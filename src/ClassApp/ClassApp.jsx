import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

const defaultUser = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            defaultUser
          }
        />
        <ClassForm />
      </>
    );
  }
}
