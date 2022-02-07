import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import lines from "../images/lines.svg";
import questions from "../questions-array";
import Questions from "./Questions";

function FAQSection() {
  return (
    <FAQSectionStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span>asked questions</span>
        </h3>
        <p className="center-paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          molestias temporibus omnis atque fugit adipisci enim recusandae labore
          tempora sit minus porro commodi expedita ducimus!
        </p>
        <div className="lines">
          <img src={lines} alt="" />
        </div>
        <div className="questions-container">
          {questions.map((q) => {
            return <Questions key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FAQSectionStyled>
  );
}

const FAQSectionStyled = styled.section`
  .center-paragraph {
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 90%;
    }
  }
  .questions-container {
    padding-top: 4rem;
    transition: all 0.4s ease-in-out;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 425%;
    z-index: -2;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export default FAQSection;
