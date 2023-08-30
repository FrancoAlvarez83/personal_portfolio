import React, { useState ,createContext} from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [userLang, setUserLang] = useState("es");

  const handleLang = (newLang) => {
    setUserLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ userLang, handleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;