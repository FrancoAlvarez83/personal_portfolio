import React from 'react'
import { motion } from 'framer-motion'

//! Globals
import {
    PaddingContainer,
    FlexContainer,
    IconContainer,
    Heading,
    BlueText, 
    ParaText,
    ContactLink,
    Button
} from '../styles/Global.styled';

import { fadeInBottomVarialnt, fadeInTopVariant } from '../utils/Variants';

import CV from '../utils/cv.json'

import {
    LinkButton
} from '../styles/LinkButton.styled'

import { Contact_Info } from '../utils/contact'


const Contact = ({ lang }) => {
  return (
    <PaddingContainer
        id="contact"
        top="5%"
        bottom="10%"
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
    >
        <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"            
        >
            {Contact_Info.main.mini[lang]}
        </Heading>

        <Heading
            as={motion.h2}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h2"         
            top="0.5rem"
            bottom="2rem"
        >
            {Contact_Info.main.title_first[lang]} <BlueText>{Contact_Info.main.title_second[lang]}</BlueText>
        </Heading>

       
            <FlexContainer gap="20px" responsiveFlex
            as={motion.div} 
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            >
                    <IconContainer size="2rem" color="blue">
                            {Contact_Info.contact.phone.icon}
                    </IconContainer>

                    <ParaText            
                    size="h4"
                    align="center"   
                    top="0.5rem"
                    >
                        {Contact_Info.contact.phone.title[lang]}
                    </ParaText>

                    <ContactLink            
                    size="h4"
                    align="center"   
                    top="0.5rem"
                    type="whatsapp"
                    href="https://api.whatsapp.com/send?phone=543516149890&amp;text=Hola%20Fran%2C%20vi%20tu%20portfolio%20y%20quería%20hacerte%20una%20consulta" target="_blank" rel="noopener noreferrer"
                    >
                        {Contact_Info.contact.phone.text}
                    </ContactLink>
            </FlexContainer>    
            <FlexContainer gap="20px" responsiveFlex
             as={motion.div} 
             variants={fadeInTopVariant}
             initial="hidden"
             whileInView="visible"
             >
                    <IconContainer size="2rem" color="blue">
                            {Contact_Info.contact.mail.icon}
                    </IconContainer>

                    <ParaText 
                    size="h4"
                    align="center"                      
                    >
                        {Contact_Info.contact.mail.title[lang]}
                    </ParaText>

                    <ContactLink 
                    size="h4"
                    align="center"  
                    type="email"
                    href = "mailto: francoalvarezstevenot838@gmail.com"
                    >
                        {Contact_Info.contact.mail.text}
                    </ContactLink>
            </FlexContainer>    
      
            <LinkButton href={`./cv_${CV.name[lang]}.jpg`} download="Franco_CV" 
            >{CV.title[lang]}</LinkButton>

    </PaddingContainer>
  )
}

export default Contact