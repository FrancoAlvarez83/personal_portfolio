import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';


import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import f1_main from '../assets/f1_main.png';
import main_logo from '../assets/main_logo.png'

import navLinksJson from '../utils/navigationLinks.json';

//! Globals
import {
    PaddingContainer,
    FlexContainer,
    Container,    
} from '../styles/Global.styled'

// import navbar styles
import {
    NavbarContainer, 
    Logo,
    NavList,
    MobileMenuButton,
    MobileSidebar
} from '../styles/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import MainLogo from '../assets/main_logo.png'
import ToggleButton from './ToggleButton';

const Navbar = ({lang, handleLang}) => {

    const [toggle, setToggle] = useState(false);
  
    return (
      <Container>
        <NavbarContainer>
            <Logo src={main_logo} alt="portfolio" />
    
            <NavList>
                {navLinksJson.links.map((nav, index) => (
                    <li key={nav.id} last={index === navLinksJson.length - 1}>
                    <a href={`#${nav.id}`}>{nav.title[lang]}</a>
                    </li>
                ))}
            </NavList>

            <ToggleButton lang={lang} handleLang={handleLang} />
    
            <div>
            <MobileMenuButton
                src={toggle ? close : menu}
                alt="menu"
                onClick={() => setToggle(prev => !prev)}
            />
            <MobileSidebar toggle={toggle}>
                <ul>
                {navLinksJson.links.map((nav, index) => (
                    <li key={nav.id} last={index === navLinksJson.length - 1}>
                    <a href={`#${nav.id}`}>{nav.title[lang]}</a>
                    </li>
                ))}
                </ul>
            </MobileSidebar>
            </div>
        </NavbarContainer>
    </Container>
    );
  };
  
  export default Navbar;