import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-light-gray);
  height: 10%;
  margin-bottom: 0.938rem;
  @media screen and (min-width: 1050px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1050px) {
    margin-left: 15.5rem;
  }
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2.125rem;
`;

export const Span = styled.span`
  color: var(--color-red-secondary);
  font-size: 1.125rem;
  font-weight: 600;
`;

export const InputContainer = styled.form`
  background: var(--color-white);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  height: 50%;
  margin-bottom: 0.875rem;
  @media screen and (min-width: 1050px) {
    display: flex;
    margin-right: 8.3rem;
    width: 22%;
    height: 90%;
    margin-top: 0.7%;
  }
`;

export const Input = styled.input`
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
  outline: none;
`;

export const Button = styled.button`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 15px;

  background: var(--color-green-primary);
  color: #ffffff;
  border: 2px solid #27ae60;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transition: 0.8s;
    background-color: white;
    color: #27ae60;
  }
`;
