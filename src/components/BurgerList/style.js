import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  height: 50%;
  overflow-x: scroll;
  margin-bottom: 1rem;
  box-sizing: content-box;
  min-height: 500px;

  @media screen and (min-width: 1050px) {
    display: flex;

    height: 100%;
    width: 60%;
    flex-wrap: wrap;
    align-items: center;

    margin-right: 11rem;
    margin-top: 0.5rem;
    overflow-x: auto;
    max-width: 1000px;
  }
  @media screen and (min-width: 1051px) {
    margin-right: 1rem;
  }
`;
