import  styled  from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;    
    .top-btn{
        font-size: 2.4rem;
        width: 3rem;
        height: 3rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        position: fixed;
        bottom: 5rem;
        right: 5rem;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;    

    /* &--icon {
        animation: gototop 0.8s linear infinite alternate-reverse;
    }

    @keyframes gototop {
        0% {
            transform: translateY(0rem);
        }
        100%{
            transform: translateY(0.5rem);
        }
    } */
 }
`