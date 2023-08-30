import React from 'react'
import { motion } from 'framer-motion'

//! Globals
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText    
} from '../styles/Global.styled';

import Footer_Info from '../utils/footer.json'

import { fadeInTopVariant } from '../utils/Variants';


const Footer = ({lang}) => {
  return (
    <PaddingContainer
        id="footer"
        top="5%"
        bottom="1.5rem"
    >        
        <ParaText
            as={motion.div}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
            align="center"   
            top="0.5rem"
        >
            {Footer_Info.footer.text[lang]}            
        </ParaText>

    </PaddingContainer>
  )
}

export default Footer