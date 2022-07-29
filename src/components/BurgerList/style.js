import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  /* width: 90%; */
  height: 45%;
  /* max-height: 900px;
  max-width: 900px; */
  /* border: 1px solid red; */
  overflow-x: scroll;
  margin-bottom: 1rem;
  box-sizing: content-box;

  @media screen and (min-width: 800px) {
    display: flex;
    height: 100%;
    width: 70%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    margin-right: 4rem;
  }
`;
