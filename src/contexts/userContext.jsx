import React, { useState } from "react";

export const LogInContext = React.createContext();

export function LogInProvider(props) {
  const [auth, setAuth] = useState('')
  const value = {auth, setAuth}
  return (
    <LogInContext.Provider value={value} >
      {props.children}
    </ LogInContext.Provider>
  )
}