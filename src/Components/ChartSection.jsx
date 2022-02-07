import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from "../images/chart.svg";
import AnimatedButton from "./AnimatedButton";

function ChartSection() {
  return (
    <ChartSectionStyled>
      <InnerLayout>
        <div className="chart-container">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={"Balance"} amount={"$250"} />
                <ChartStats name={"Last Transaction"} amount={"$1,000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
              Manage your finances like a pro in no time
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              tenetur, nam neque provident magni libero, voluptas doloribus
              minima laborum soluta modi. Sequi, nostrum error. Dolore.
            </p>
            <AnimatedButton name={"Learn more"} />
          </div>
        </div>
      </InnerLayout>
    </ChartSectionStyled>
  );
}
const ChartSectionStyled = styled.section`
  .chart-container {
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
    .stats {
      img {
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        border-radius: 50px;
        width: 100%;
      }
    }
    .stats-money {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1.3rem;
    }
    .chart-right {
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;
export default ChartSection;
