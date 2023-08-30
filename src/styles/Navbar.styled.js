import { styled } from "styled-components";

export const NavbarContainer = styled.nav`   
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  padding: 1.5rem 0; 
`;

export const Logo = styled.img`
  max-width: 15%;  
  height: auto;  
`;

export const NavList = styled.ul`
  display: none;  
  list-style-type: none;
  a{
        font-size: 18px;
        color: white;
        text-decoration: none;
        margin-left: 1.5rem;
        &:hover {
            transition: 0.3s;
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

  @media (min-width: 640px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;       
  }
`;

export const MobileMenuButton = styled.img`
  display: none;
  width: 28px;
  height: 28px;
  object-fit: contain;
   cursor: pointer;
  @media(max-width: 639px){
        display: flex;
        align-items: flex-end;
}
`;

export const MobileSidebar = styled.div`
  display: ${props => (props.toggle ? 'flex' : 'none')};
  position: absolute;
  top: 70px;
  right: 25px;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  border-radius: 10px; 
  a{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 18px;
        color: white;
        text-decoration: none;     
         &:hover {
            transition: 0.3s;
            color: ${({ theme }) => theme.colors.primary_light};
        }
    }

    li{
        list-style-type: none;
    }
  
`;