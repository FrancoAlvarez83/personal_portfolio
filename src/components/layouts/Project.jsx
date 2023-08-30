import React from 'react'
import { motion } from 'framer-motion'

import { useContext } from "react";
import { LanguageContext } from '../../context/context'

//! Globals
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  IconContainer,    
  Button
} from '../../styles/Global.styled';


import {
  TechStackCard,
  ProjectImage,
  ProjectImageContainer
} from '../../styles/MyProject.styled';

import {
  LinkButton
} from '../../styles/LinkButton.styled'

import Project_Header from '../../utils/projects_header.json'

//! Assets
import { FaGithub } from 'react-icons/fa';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';



const Project = ({ data }) => {

  const lang = useContext(LanguageContext)

  return (
    <FlexContainer fullWidthChild>

     
      <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
            <Heading as="h3" size="h3" bottom="1rem">
                {data.project_name[lang.userLang]}
            </Heading>

            <IconContainer color="blue" size="2rem">
              <FaGithub />
            </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
            <FlexContainer gap="1.5rem">
                {data.tech_stack.map((stack) => (
                  <TechStackCard>{stack}</TechStackCard>
                ))}
            </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
            {data.desc[lang.userLang]}
        </ParaText>

        <LinkButton href={data.project_url} target="_blank">{Project_Header.main.button[lang.userLang]}</LinkButton>
      </motion.div>

   
      <ProjectImageContainer
         as={motion.div}
         variants={fadeInRightVariant}
         initial="hidden"
         whileInView="visible"
         justify="flex-end"
      >
        <ProjectImage 
          src={data.project_img} 
          alt={data.project_name[lang.userLang]} 
        />
      </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project