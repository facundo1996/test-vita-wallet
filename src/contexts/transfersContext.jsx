import React, { useState } from "react";

export const transferContext = React.createContext();

export function TransferProvider(props) {
  const [transferData, setTransferData] = useState({
    transfer:{
      amount: Number,
      email: String,
      description: String,
    },
    step: 1
  })
  const value = {transferData, setTransferData}
  return (
    <transferContext.Provider value={value} >
      {props.children}
    </ transferContext.Provider>
  )
}