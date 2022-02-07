import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import creditcard from "../images/creditcard.svg";

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              culpa magnam esse eveniet! Ratione laboriosam nobis suscipit
              facere non, doloribus amet quis. Numquam, aliquam inventore.
            </p>
          </div>
          <div className="card-right">
            <img src={creditcard} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      justify-items: center;
    }
    .card-left {
      padding-right: 20px;
      p {
        padding: 1rem 0;
      }
    }

    .card-right {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 100%;
      }
    }
  }
`;
export default CardSection;
