import React from "react";
import styled from "styled-components";
import bg from "../images/bg.svg";
import HeaderContent from "./HeaderContent";
import Navigation from "./Navigation";

function Header() {
  return (
    <HeaderStyled>
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  @media screen and (max-width: 700px) {
    min-height: 140vh;
  }
  @media screen and (max-width: 400px) {
    min-height: 160vh;
  }
  .header-content {
    padding: 0 10rem;
    @media screen and (max-width: 1200px) {
      padding: 0 4rem;
    }
    @media screen and (max-width: 750px) {
      padding: 0 2rem;
    }
  }
`;

export default Header;
