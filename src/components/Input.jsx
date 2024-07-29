import React from "react";
import Styles from "./Input.module.css"

function Input({
    lb,
    amount,
    selectcurrency ,
    onamountchange,
    oncurrencychange,
    currencyoptions= [],
}){

    return (
        <>
        <div className={`${Styles["container"]}`}>
            <div className={`${Styles["label-div"]}`}>
            <div>
                <label > {lb} </label>
            </div>
            <div>
                <label> Currency Type </label>
            </div>
            </div>
            <div className={`${Styles["input-div"]}`}>
            <div>
                <input placeholder="amount" value={amount} onChange={(e) => onamountchange && onamountchange(Number(e.target.value))} />
            </div>
            <div className="dropdown">
                <select value={selectcurrency} onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)} >
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            </div>
            
        </div>
        </>
    )
        
  }
  
  export default Input;