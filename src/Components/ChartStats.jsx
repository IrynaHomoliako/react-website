import React from "react";
import styled from "styled-components";

function ChartStats({ name, amount }) {
  return (
    <ChartStatsStyled>
      <p>
        <b>{name}</b>
      </p>
      <h4>{amount}</h4>
    </ChartStatsStyled>
  );
}
const ChartStatsStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  border-radius: 50px;
  border: 1px solid var(--border-colour);
  width: 48%;
  height: 10rem;
  padding: 2rem;
  @media screen and (max-width: 400px) {
    padding: 0.7rem;
  }
  b {
    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
  h4 {
    font-size: 3rem;
    color: var(--purple-primary);
    @media screen and (max-width: 1350px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 820px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.3rem;
    }
  }
`;
export default ChartStats;
