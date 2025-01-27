import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";


export class ClassApp extends Component {
  state = {
    userData: null,
 
  };

  setUserData = (userData) => {
    this.setState({ userData });
  };

  render() {
    const { userData , setUserData} = this.state;
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userData}  />
        <ClassForm
          setUserData={this.setUserData}
          userData={this.state.userData}
        />
      </>
    );
  }
}
