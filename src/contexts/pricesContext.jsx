import React, { useState } from "react";

export const pricesContext = React.createContext();

export function PricesProvider(props) {
  const [pricesData, setPricesData] = useState(null)
  const value = {pricesData, setPricesData}
  return (
    <pricesContext.Provider value={value} >
      {props.children}
    </ pricesContext.Provider>
  )
}