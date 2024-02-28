import React, { useState } from "react";

export const LogInContext = React.createContext();

export function LogInProvider(props) {
  const [token, setToken] = useState(null)
  const value = {token, setToken}
  return (
    <LogInContext.Provider value={value} >
      {props.children}
    </ LogInContext.Provider>
  )
}