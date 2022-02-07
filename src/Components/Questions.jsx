import React, { useState } from "react";
import styled from "styled-components";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";

function Questions({ title, description }) {
  const [toggle, setToggle] = useState(false);
  const btnToggler = () => {
    setToggle(!toggle);
  };
  return (
    <QuestionsStyled>
      <div className="question container">
        <div className="toggle-title">
          <h4>{title}</h4>
          <button onClick={() => btnToggler()}>
            {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </QuestionsStyled>
  );
}

const QuestionsStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1.4rem 1rem;
  border-radius: 24px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  @media screen and (max-width: 450px) {
    padding: 1rem 0.7rem;
  }
  h4 {
    color: #16194f;
    font-size: 1.3rem;
    transition: all 0.4s ease-in-out;
    padding-right: 15px;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  p {
    transition: all 0.4s ease-in-out;
    padding-top: 15px;
    @media screen and (max-width: 680px) {
      line-height: 1.5rem;
      font-size: 1.1rem;
    }
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

export default Questions;
