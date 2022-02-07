import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";
import avatar3 from "../images/avatar3.svg";
import avatar4 from "../images/avatar4.svg";
import avatar5 from "../images/avatar5.svg";
import messaging from "../images/conversation.svg";
import bgCircles from "../images/bg_circles.svg";

function MessagingSection() {
  return (
    <MessagingSectionStyled>
      <InnerLayout>
        <div className="message-container">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, laboriosam. Magnam molestiae atque blanditiis nobis
              animi unde beatae, vel cum inventore perferendis porro. Unde,
              aperiam?
            </p>
            <div className="images-container">
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>&nbsp; +25</p>
            </div>
            <img src={bgCircles} alt="" className="bg-circles" />
          </div>
          <div className="right-items">
            <img src={messaging} alt="" className="messaging-img" />
            <img src={bgCircles} alt="" className="bg-circles" />
          </div>
        </div>
      </InnerLayout>
    </MessagingSectionStyled>
  );
}

const MessagingSectionStyled = styled.section`
  .message-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.5rem;
    @media screen and (max-width: 820px) {
      grid-gap: 2rem;
    }
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      justify-items: center;
    }
  }
  .left-items {
    position: relative;
    @media screen and (max-width: 720px) {
      margin-bottom: 35px;
    }
    .message-text {
      padding: 2rem 0;
    }
    .bg-circles {
      position: absolute;
      top: -10%;
      left: -10%;
      z-index: -1;
      @media screen and (max-width: 720px) {
        left: -5%;
      }
    }
    .images-container {
      display: flex;
      align-items: center;
      @media screen and (max-width: 720px) {
        justify-content: center;
      }
      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -22px;
      }
    }
  }
  .right-items {
    position: relative;
    @media screen and (max-width: 950px) {
      display: flex;
      justify-content: center;
    }
    .messaging-img {
      width: 100%;
    }
    .bg-circles {
      position: absolute;
      bottom: -3%;
      right: -10%;
      z-index: -1;
      @media screen and (max-width: 950px) {
        display: none;
      }
    }
  }
`;
export default MessagingSection;
