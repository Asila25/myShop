// import  { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import {
  HeaderButton,
  HeaderListWrapper,
  Headerlogo,
  HeaderWrapper,
  Navlist,
  Headercontainer,
  StyledNavLink,
} from "./Header.styled";

const Header = () => {
//   const location = useLocation();
  // const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <StyledNavLink to="#" >
          <p>Phone</p>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="#" >
          <p>Electronics</p>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="#" >
          <p>Laptops</p>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="#" >
          <p>Accessories</p>
        </StyledNavLink>
      </li>
    </>
  );

    return (
      <Headercontainer >
        <HeaderWrapper className="container">
          <Headerlogo>
            <NavLink to="/">
              <p>MyShop</p>
            </NavLink>
          </Headerlogo>
          <HeaderListWrapper>
            <Navlist>{navLink}</Navlist>
            
              <Link to={"/login"}>
                <HeaderButton>login</HeaderButton>
              </Link>
           
          </HeaderListWrapper>
        </HeaderWrapper>
      </Headercontainer>
    );
};

export default Header;
