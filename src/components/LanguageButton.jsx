import { useContext } from "react";
import { LanguageContext } from "../context/context.js";

const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <button onClick={toggleLanguage}> {language} </button>
  )
}

export default LanguageButton