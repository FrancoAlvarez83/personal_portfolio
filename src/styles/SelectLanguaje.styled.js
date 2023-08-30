import styled from "styled-components";

export const SelectLanguaje = styled.select`
      background-color: ${({ theme }) => theme.colors.primary_light};
      cursor: pointer;      
      font-weight: 500;
      font-size: 16px;
      color:  #fff;
      width: 120px;
      height: 30px;      
      border: none;    
      /* border: 1px solid ${({theme}) => theme.colors.secondary}; */
      border-radius: 4px;
      margin-left: 1.5rem;    
`