import React, { useState } from "react";

export const historyContext = React.createContext();

export function HistoryProvider(props) {
  const [historyData, setHistoryData] = useState(null)
  const value = {historyData, setHistoryData}
  return (
    <historyContext.Provider value={value} >
      {props.children}
    </ historyContext.Provider>
  )
}