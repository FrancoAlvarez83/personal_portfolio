
import { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from './utils/Theme'
import { MainBody, Container } from "./styles/Global.styled";

// Importar componentes
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import Contact from "./components/Contact";



import { LanguageContext } from './context/context'



const Layout = () => {
const langContext = useContext(LanguageContext)
  return (
    <ThemeProvider theme={theme}>
        <MainBody>
            <Navbar lang={langContext.userLang} handleLang={langContext.handleLang} />
            <GoToTop />
            <Container>
                <Showcase lang={langContext.userLang} handleLang={langContext.handleLang} />
                <MySkills lang={langContext.userLang} handleLang={langContext.handleLang} />
                <MyProjects lang={langContext.userLang} handleLang={langContext.handleLang} />
                {<Contact lang={langContext.userLang} handleLang={langContext.handleLang} />}
                <Footer lang={langContext.userLang} handleLang={langContext.handleLang} />
            </Container>
        </MainBody>
    </ThemeProvider>
  )
}

export default Layout