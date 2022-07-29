import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  height: 30%;
  border: 1px solid red;
  @media screen and (min-width: 800px) {
    width: 20%;
    height: 20%;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  height: 100%;
  padding: 20px 10px 20px 10px;
  overflow: auto;

  .elementListCart {
    display: flex;
    height: 40%;
    width: 100%;
    margin-bottom: 1.313rem;
    .imgContainer {
      height: 100%;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0e0e0;
      border-radius: 5px;
      margin-right: 0.625rem;
      .img {
        width: 70%;
        height: 90%;
        /* width: 80px;
        height: 80px; */
      }
    }
    .titleContainer {
      margin-top: 1rem;
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
      font-size: 12px;
      line-height: 15px;
      color: #bdbdbd;
      margin-top: 1rem;
      display: flex;
      height: 20%;
      background-color: Transparent;
    }
  }
`;
export const CartEmpty = styled.li``;
export const CartAddItens = styled.li``;

export const Line = styled.div``;
export const PriceContainer = styled.div``;
export const TotalContainer = styled.div``;
export const TotalSpan = styled.span``;
export const PriceParagraph = styled.p``;
export const RemoveAllButton = styled.button``;
