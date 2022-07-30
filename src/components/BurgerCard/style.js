import styled from "styled-components";

export const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  width: 300px;
  height: 100%;
  margin-right: 1.25rem;
  min-width: 260px;
  @media screen and (min-width: 1050px) {
    width: 31%;
    height: 47%;
    margin-bottom: 0.75rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45%;
  margin-bottom: 1.625rem;
  background-color: var(--color-light-gray);
`;

export const Img = styled.img`
  width: 80%;
  height: 90%;
  /* width: 150px;
  height: 150px; */
  /* max-width: 180px;
  max-height: 180px; */
  @media screen and (min-width: 1050px) {
    width: 66%;
    height: 100%;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1.25rem;
`;

export const BurgerTitle = styled.h2`
  color: var(--color-dark-gray);
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;

  height: 5vh;
`;

export const BurgerCategory = styled.p`
  color: var(--color-medium-gray);
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const BurgerPrice = styled.span`
  color: var(--color-green-primary);
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const Button = styled.button`
  color: var(--color-white);
  max-width: 100px;
  height: 2rem;
  background: var(--color-green-primary);
  border: 2px solid #27ae60;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    transition: 0.8s;
    background-color: white;
    color: #27ae60;
  }
`;
