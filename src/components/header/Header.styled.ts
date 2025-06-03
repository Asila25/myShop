import { NavLink } from "react-router-dom";
import styled from "styled-components";




export const Headercontainer = styled.header`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3e3f5b;
  border-radius: 68px;
  padding: 10px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 1200px;
`;



export const HeaderListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Navlist = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  padding: 0;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    opacity: 0.8;
  }

  /* &.active {
    font-weight: bold;
  } */
`;
export const Headerlogo = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

export const HeaderButton = styled.button`

    background-color: #f5f1e6;
    color: black;
    padding: 8px 24px;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  
`;
