import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        display: none;
    }
`

export const ShowcaseImageCard = styled.div`
    top: 0;
    width: max-content;   
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`

export const Particle = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate});
`