import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1050px) {
    margin-top: 1rem;
    margin-right: 2rem;
    width: 20%;
    height: 40%;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 25%;
  background: var(--color-green-primary);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
export const CartTitle = styled.h3`
  color: var(--color-white);
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
export const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  height: 100%;
  padding: 20px 10px 20px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: row;
  flex-wrap: wrap;

  .elementListCart {
    display: flex;
    height: 40%;
    width: 100%;

    .imgContainer {
      height: 100%;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0e0e0;
      border-radius: 5px;
      margin-right: 0.625rem;
      max-height: 62px;
      .img {
        width: 60%;
        height: 100%;
        /* width: 80px;
        height: 80px; */
      }
    }
    .titleContainer {
      margin-right: 2rem;
      height: 50%;

      width: 40%;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #333333;
      }
      .titleCategory {
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        color: #828282;
      }
    }
    button {
      font-style: normal;
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 0.938rem;
      color: #bdbdbd;
      margin-top: 1rem;
      display: flex;
      height: 20%;
      background-color: Transparent;
      cursor: pointer;
    }
  }
`;
export const CartEmpty = styled.li``;
export const CartAddItens = styled.li``;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
`;
export const PriceContainer = styled.div`
  border-radius: 0px 0px 5px 5px;
  background: #f5f5f5;
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TotalSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-left: 0.9rem;
  color: #333333;
`;
export const PriceParagraph = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-right: 1rem;
  color: #828282;
`;
export const RemoveAllButton = styled.button`
  width: 90%;
  margin-left: 0.8rem;
  background: #e0e0e0;
  height: 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #828282;
  cursor: pointer;
  &:hover {
    transition: 1s;
    background-color: black;
    color: white;
  }
`;
