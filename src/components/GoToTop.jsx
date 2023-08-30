import React, { useEffect,useState } from 'react'
import { Wrapper } from '../styles/GoToTop.styled';
import { AiOutlineArrowUp } from "react-icons/ai";


const GoToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const GoToBtn = () => {
    window.scrollTo({top:0, left: 0, behavior: "smooth"});
  }

  const listenToScroll = () => {   
        let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll > heightToHidden){
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
        {isVisible && (
            <div className="top-btn" onClick={GoToBtn}>
                <AiOutlineArrowUp className="top-btn--icon" />
            </div>
        )}
    </Wrapper>
  )
}

export default GoToTop