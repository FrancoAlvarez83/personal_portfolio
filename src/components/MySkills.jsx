import React from 'react'
import { motion } from 'framer-motion';

import { useContext } from "react";
import { LanguageContext } from '../context/context'

//! Globals
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,   
    IconContainer,    
} from '../styles/Global.styled'


import Skills_Head from '../utils/skills.json'

// Import skills styles
import {
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Skills';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
  const lang = useContext(LanguageContext) 

  return (
    <PaddingContainer
        id="skills"
        top="10%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <FlexContainer
            responsiveFlex 
            responsiveDirection="column-reverse"
            fullWidthChild>
            {/* left-section */}
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                    <SkillsCard>
                        <IconContainer size="5rem" color="blue" href={skill.url} target="_blank">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            {/* right-section */}
            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    {Skills_Head.header[lang.userLang]}
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem">
                    {Skills_Head.title.first[lang.userLang]} <BlueText>{Skills_Head.title.second[lang.userLang]}</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    {Skills_Head.paragraph.first[lang.userLang]}
                </ParaText>

                <ParaText>
                     {Skills_Head.paragraph.second[lang.userLang]}
                </ParaText>

               
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills