import  styled  from "styled-components";

export const LinkButton = styled.a`
    text-decoration: none;
    display: inline-block;
    width: max-content;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_light};
    /* border: 1px solid ${({theme }) => theme.colors.gray}; */
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        color: ${({theme}) => theme.colors.primary_light};
        background-color: ${({theme}) => theme.colors.white};
    }
`