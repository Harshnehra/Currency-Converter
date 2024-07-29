import Styles from "./Heading.module.css"

function Heading(){

    return <h1 className={`${Styles["main-heading"]}`}>
      Currency Converter
    </h1>
  }
  
  export default Heading;