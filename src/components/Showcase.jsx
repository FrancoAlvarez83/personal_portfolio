import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

import Text from '../utils/main.json'

// import LanguageButton from './LanguageButton';

//! Globals
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,   
    IconContainer,    
} from '../styles/Global.styled'

//! Showcase
import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle
} from '../styles/Showcase.styled'

//! Icons
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub} from "react-icons/bs";

//! Assets
import Profile from '../assets/profile.png'
import Pzero from '../assets/pzero.png'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = ({ lang }) => {

  return (
    <PaddingContainer 
        id="home"
        left="3%"
        right="10%"
        top="18%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight= "1rem"
        responsiveTop="8rem"
    >  
        <FlexContainer fullWidthChild>
            <motion.div
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"    
            >
                                
                <Heading as="h4" size="h4">
                    {Text.about.main.salute[lang]}
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem"
                    bottom="0.5rem">
                    {Text.about.main.title[lang]}
                    {" "}
                    <BlueText>{Text.about.main.name}</BlueText>                    
                  
                </Heading>              

                <Heading as="h3" size="h3">
                    {Text.about.main.me[lang]}
                    {" "}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>  
                    <Typewriter
                        words={['Front End Developer', 'Designer']}
                        loop={0}
                        cursor                        
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}                
                    />
                    </span>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    {Text.about.main.text[lang]}
                </ParaText>

                {/* social-icons */}
                <FlexContainer gap="20px" responsiveFlex fullWidthChild>
                    <IconContainer color="white" size="1.5rem" href="https://www.linkedin.com/in/franco-alvarez-8ab600262/" target="_blank">
                        <BsLinkedin />
                    </IconContainer>                    
                    <IconContainer color="white" size="1.5rem" href='https://github.com/FrancoAlvarez83' target="_blank">
                        <BsGithub />
                    </IconContainer>
                    <IconContainer color="white" size="1.5rem" href='https://www.instagram.com/franco_alvarez83/' target="_blank">
                        <BsInstagram />
                    </IconContainer>
                    {/* <IconContainer color="white" size="1.5rem" href='https://www.youtube.com' target="_blank">
                        <BsYoutube />
                    </IconContainer> */}
                </FlexContainer>
            </motion.div>

            {/* right-content */}
            <FlexContainer 
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify="flex-end"            
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={Profile} alt="showcase" />
                    </ShowcaseImageCard>

                    {/* <Particle 
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity
                        }}
                        src={Pzero}
                        alt="particle"
                        top="-80px"
                        left="20px"
                        rotate="60deg"
                    /> */}

                    {/* <Particle 
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity
                        }}
                        src={Pzero}
                        alt="particle"
                        top="50px"
                        right="-70px"
                        rotate="0deg"
                    />

                    <Particle 
                        as={motion.img}
                        animate={{
                            y: [0, -100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity
                        }}
                        src={Pzero}
                        alt="particle"
                        bottom="10px"
                        left="-70px"
                        rotate="50deg"
                    /> */}

                    
                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase