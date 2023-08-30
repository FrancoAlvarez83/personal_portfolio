

import LanguageContextProvider from "./context/context";
import Layout from "./Layout";

function App() {
  return (
    <LanguageContextProvider>
       <Layout />
    </LanguageContextProvider>
   
  );
}

export default App;
