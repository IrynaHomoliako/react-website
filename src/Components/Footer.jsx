import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-container">
          <div className="logo-container">
            <img src={logo} alt="" />
            <p>
              Copyright @2021 Rosmsa SDf. <br />
              All rights reserved.
            </p>
          </div>
          <ul className="bottom-nav">
            <div className="links1">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
            </div>
            <div className="links2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </div>
            <div className="links3">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  padding: 0 10rem;
  background-color: #dce2f0;
  @media screen and (max-width: 1010px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 780px) {
    padding: 0 3rem;
  }

  .footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .logo-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 720px) {
      margin-bottom: 30px;
    }
    img {
      width: 70px;
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 420px) {
      flex-direction: column;
    }
    li {
      padding: 1.5rem 0;
      color: #16194f;
      @media screen and (max-width: 420px) {
        padding: 0.8rem 0;
      }
    }
  }
`;

export default Footer;
