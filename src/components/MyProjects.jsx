import React from 'react'
import { motion } from 'framer-motion'


import { useContext } from "react";
import { LanguageContext } from '../context/context'
//! Globals
import {
    PaddingContainer,  
    Heading, 
    BlueText,      
} from '../styles/Global.styled'


import { projects } from '../utils/projects'
import Project_Header from '../utils/projects_header.json'

//! Data

import Project from './layouts/Project';

import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
  
  const lang = useContext(LanguageContext) 

  return (
    <PaddingContainer
        id="projects"
        top="5%"
        bottom="5%"
        responsiveTop="20%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <Heading
            as={motion.h4} 
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView= "visible"
            size="h4"
        >                
           { Project_Header.main.header[lang.userLang]}
       </Heading>

        <Heading
            as={motion.h2}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView= "visible"
            size="h2"
        >
            {Project_Header.main.title.first[lang.userLang]} <BlueText>{Project_Header.main.title.second[lang.userLang]}</BlueText>
        </Heading>      
        
        {projects.map( project => 
                 (<PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Project data={project} lang={lang.userLang} />                    
                </PaddingContainer>)
        )}      
        
   
    </PaddingContainer>
  )
}

export default MyProjects