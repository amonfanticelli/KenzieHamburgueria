import {
  Section,
  TitleContainer,
  CartTitle,
  CartList,
  CartEmpty,
  CartAddItens,
  Line,
  PriceContainer,
  TotalContainer,
  TotalSpan,
  PriceParagraph,
  RemoveAllButton,
} from "./style";

const BurgerCart = ({
  cartItens,
  totalPrice,
  removeCartItem,
  removeAllCart,
}) => {
  return (
    <Section>
      <TitleContainer>
        <CartTitle>Carrinho de compras</CartTitle>
      </TitleContainer>
      <CartList>
        {/* {CartList.length === 0 } */}
        <CartEmpty>Sua sacola está vazia</CartEmpty>
        <CartAddItens>Adicione Itens</CartAddItens>
        {cartItens.map((cartItem) => (
          <li className="elementListCart" key={cartItem.id}>
            <div className="imgContainer">
              <img className="img" src={cartItem.img} alt="" />
            </div>
            <div className="titleContainer">
              <h1>{cartItem.name}</h1>
              <h3 className="titleCategory">{cartItem.category}</h3>
            </div>
            <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
          </li>
        ))}
      </CartList>
      <Line></Line>
      <PriceContainer>
        <TotalContainer>
          <TotalSpan>Total</TotalSpan>
          <PriceParagraph>
            R${totalPrice.toFixed(2).replace(".", ",")}{" "}
          </PriceParagraph>
        </TotalContainer>
        <RemoveAllButton onClick={() => removeAllCart(cartItens)}>
          Remover todos
        </RemoveAllButton>
      </PriceContainer>
    </Section>
  );
};

export default BurgerCart;
