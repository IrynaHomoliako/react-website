import React from "react";
import styled from "styled-components";
import arrow from "../images/arrow.svg";

function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyled>
      {name}
      <img src={arrow} alt="" />
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding-left: 0.9rem;
  }
  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
`;

export default SecondaryButton;
