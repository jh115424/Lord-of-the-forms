import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";

export const FunctionalApp = ({}) => {
  const [userData, setUserData] = useState(null);
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation setUserData={setUserData} userData={userData} />
      <FunctionalForm setUserData={setUserData} userData={userData} />
    </>
  );
};
