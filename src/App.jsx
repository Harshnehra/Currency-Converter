import Heading from "./components/Heading";
import Input from "./components/Input";
import Styles from "./components/App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import UsecurrencyInfo from "./hooks/UsecurrencyInfo";

function App(){

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)

  const currencyinfo = UsecurrencyInfo(from)

  const options= Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }



  return (
  <>
  <Heading></Heading>
  <Input 
    lb="From" 
    amount={amount} 
    currencyoptions={options}
    oncurrencychange={(currency) => setamount(amount)}
    onamountchange={(amount) => setamount(amount)}
    selectcurrency={from}
    ></Input>
  <div className={`${Styles["swap-div"]}`} >
    <button className={`${Styles["swap"]}`} onClick={swap}> Swap </button>
  </div>
  <Input 
    lb="To"
    amount={convertedamount}
    currencyoptions={options}
    oncurrencychange={(currency) => setto(currency)}
    selectcurrency={from}
    ></Input>
  <div className={`${Styles["convert-div"]}`} >
    <button className={`${Styles["convert"]}`} onClick={convert}> Convert </button>
  </div>
  </>
  )

}


export default App;