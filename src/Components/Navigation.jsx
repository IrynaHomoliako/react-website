import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../images/logo.svg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <a className="nav-link">Home</a>
        </li>
        <li>
          <a className="nav-link">Features</a>
        </li>
        <li>
          <a className="nav-link">Pricing</a>
        </li>
      </ul>
      <PrimaryButton name={"Sign Up"} />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  @media screen and (max-width: 520px) {
    flex-wrap: wrap;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
    @media screen and (max-width: 700px) {
      width: 49%;
    }
    @media screen and (max-width: 520px) {
      order: 1;
      width: 97%;
      padding-top: 1rem;
    }
  }
`;
export default Navigation;
