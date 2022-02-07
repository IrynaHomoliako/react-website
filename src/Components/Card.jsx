import React from "react";
import styled from "styled-components";

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  checkDisabled,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <CardStyled>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount}
        <span> / m</span>
      </h4>
      <p className="center-text">{text}</p>
      <div className="button-container">
        <button>{button}</button>
      </div>
      <div className="card-image-container">
        <img src={card}></img>
      </div>
      <div className="plan-container">
        <img src={active} />
        <img src={inactive} />
      </div>
      <div className="list-container">
        <p className="text-check">
          <img src={check} />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} />
          {text3}
        </p>
        <p className="text-check">
          <img src={check} />
          {text4}
        </p>
        <p className="text-check">
          <img src={check} />
          {text5}
        </p>
        <p className="text-check">
          <img src={checkDisabled} />
          {text6}
        </p>
        <p className="text-check">
          <img src={checkDisabled} />
          {text7}
        </p>
        <p className="text-check">
          <img src={checkDisabled} />
          {text8}
        </p>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 40px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  @media screen and (max-width: 820px) {
    padding: 1rem;
  }
  @media screen and (max-width: 590px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: 590px) {
    padding: 1rem 1.5rem;
  }

  .card-title {
    font-size: 2.5rem;
    color: var(--dark-primary);
    text-align: center;
    padding: 1.5rem 0;
    @media screen and (max-width: 820px) {
      font-size: 2rem;
      padding: 1rem 0;
    }
    span {
      font-size: 1.5rem;
    }
  }

  .button-container {
    text-align: center;
    padding: 1.5rem 0;

    button {
      border: 2px solid #16194f;
      padding: 0.8rem 1.8rem;
      outline: none;
      cursor: poiner;
      background: transparent;
      border-radius: 20px;
      font-size: inherit;
      color: #16194f;
      transition: all 1s;
    }
    button:hover {
      background-color: var(--border-colour);
      border-color: var(--border-colour);
    }
  }

  .card-image-container {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
      @media screen and (max-width: 590px) {
        width: 80%;
      }
    }
  }

  .plan-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    img {
      padding: 0 0.3rem;
    }
  }

  .text-check {
    display: flex;
    align-items: flex-start;
    padding: 0.4rem 0;
    img {
      padding-right: 0.3rem;
      padding-top: 7px;
      width: 24px;
    }
    &:nth-child(6) {
      color: #b7b7b7;
    }
    &:nth-child(7) {
      color: #b7b7b7;
    }
    &:nth-child(8) {
      color: #b7b7b7;
    }
  }
`;

export default Card;
