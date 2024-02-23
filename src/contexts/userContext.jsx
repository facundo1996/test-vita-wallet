import React, { useState } from "react";

export const LogInContext = React.createContext();

export function LogInProvider(props) {
  /* const [user, setUser] = useState(0) */
  const [auth, setAuth] = useState(false)
  const value = {auth, setAuth}
  return (
    <LogInContext.Provider value={value} >
      {props.children}
    </ LogInContext.Provider>
  )
}