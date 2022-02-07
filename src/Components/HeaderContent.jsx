import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../images/phone.svg";
import ring1 from "../images/ring_orange.svg";
import message1 from "../images/message_pink.svg";
import message2 from "../images/message_blue.svg";

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            laboriosam cum quia sequi non, eveniet quas fugit, necessitatibus
            eos, deserunt aut animi vero minus dolore ex pariatur eaque ipsam
            atque.
          </p>
          <SecondaryButton name={"Register Now"} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="" className="phone-img" />
        <img src={ring1} alt="" className="ring1" />
        <img src={message1} alt="" className="message1" />
        <img src={message2} alt="" className="message2" />
      </div>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    @media screen and (max-width: 700px) {
      padding-right: 0rem;
    }
    h1 {
      font-size: 3rem;
      font-weight: 600;
      @media screen and (max-width: 750px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 700px) {
        text-align: center;
      }
      @media screen and (max-width: 440px) {
        font-size: 2rem;
      }
    }

    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: white;
      @media screen and (max-width: 700px) {
        text-align: center;
      }
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 700px) {
      width: 70%;
    }
    @media screen and (max-width: 440px) {
      width: 98%;
    }
    .phone-img {
      max-width: 100%;
    }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 8s infinite;
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 1000px) {
        width: 20%;
      }
      @media screen and (max-width: 850px) {
        bottom: 12%;
        right: 39px;
      }
    }
    .message1 {
      position: absolute;
      top: 0;
      right: -10%;
      left: auto;
      width: 26%;
      animation: move 5s infinite;
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 1000px) {
        width: 26%;
      }
      @media screen and (max-width: 850px) {
        right: 5%;
      }
    }
    .message2 {
      position: absolute;
      bottom: 12%;
      left: -15%;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 1000px) {
        width: 26%;
      }
      @media screen and (max-width: 850px) {
        bottom: 17%;
        left: -11%;
      }
    }
  }

  // Header Animations
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
    }
  }
`;

export default HeaderContent;
