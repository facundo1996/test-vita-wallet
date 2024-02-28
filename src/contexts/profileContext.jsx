import React, { useState } from "react";

export const profileContext = React.createContext();

export function ProfileProvider(props) {
  const [profileData, setProfileData] = useState(null)
  const value = {profileData, setProfileData}
  return (
    <profileContext.Provider value={value} >
      {props.children}
    </ profileContext.Provider>
  )
}