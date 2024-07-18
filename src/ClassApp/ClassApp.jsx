import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";
import { useState } from "react";

const defaultUser = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component {
  constructor(props) {
    // const [userData, setUserData] = useState(null);
    super(props);
    this.state = {
      userData: null,
    };
  }
  render() {
    const { userData } = this.state;
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={userData || defaultUser}
          setUserData={defaultUser}
        />
        <ClassForm />
      </>
    );
  }
}
