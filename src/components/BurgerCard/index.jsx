import {
  ListElement,
  ImgContainer,
  Img,
  BurgerContainer,
  BurgerTitle,
  BurgerCategory,
  BurgerPrice,
  Button,
} from "./style";

const BurgerCard = ({ burger, addCartItem }) => {
  return (
    <ListElement>
      <ImgContainer>
        <Img src={burger.img} alt="" />
      </ImgContainer>
      <BurgerContainer>
        <BurgerTitle>{burger.name}</BurgerTitle>
        <BurgerCategory>{burger.category}</BurgerCategory>
        <BurgerPrice>R$ {burger.price.toFixed(2)}</BurgerPrice>
        <Button onClick={() => addCartItem(burger)}>Adicionar</Button>
      </BurgerContainer>
    </ListElement>
  );
};

export default BurgerCard;
