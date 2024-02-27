import { useContext, useEffect } from "react";
import FormTransfer from "../components/FormTransfer";
import SummaryTransaction from "../components/SummaryTransaction"
import { transferContext } from "../contexts/transfersContext";

function Transfers() {
  const { transferData, setTransferData } = useContext(transferContext)
  function transferSteps() {
    let step = transferData.case
    switch (step) {
      case 1:
        return <FormTransfer />
      case 2:
        return <SummaryTransaction />
      case 3:
        return <h1>3333</h1>
      default:
        return <FormTransfer />
    }
  }

  return (
    <>
      {
        transferSteps()
      }
    </>
  )
}

export default Transfers