import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem 10rem;
  @media screen and (max-width: 1350px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 970px) {
    padding: 4rem;
  }
  @media screen and (max-width: 720px) {
    padding: 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.section`
  padding: 8rem 0;
  @media screen and (max-width: 720px) {
    padding: 6rem 0;
  }
`;
