import {
  Section,
  TitleContainer,
  CartTitle,
  CartList,
  CartEmpty,
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
        {cartItens.length > 0 ? (
          cartItens.map((cartItem) => (
            <li className="elementListCart" key={cartItem.id}>
              <div className="imgContainer">
                <img className="img" src={cartItem.img} alt="" />
              </div>
              <div className="titleContainer">
                <h1>{cartItem.name}</h1>
                <h3 className="titleCategory">{cartItem.category}</h3>
              </div>
              <button onClick={() => removeCartItem(cartItem.id)}>
                Remover
              </button>
            </li>
          ))
        ) : (
          <CartEmpty>
            <p className="p1">Sua sacola está vazia</p>
            <p className="p2">Adicione Itens</p>
          </CartEmpty>
        )}
      </CartList>
      {cartItens.length > 0 ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </Section>
  );
};

// { !CartList.length ? (
//   <CartEmpty>Sua sacola está vazia</CartEmpty>
//   <CartAddItens>Adicione Itens</CartAddItens> ) :
//   cartItens.map((cartItem) => (
//     <li className="elementListCart" key={cartItem.id}>
//       <div className="imgContainer">
//         <img className="img" src={cartItem.img} alt="" />
//       </div>
//       <div className="titleContainer">
//         <h1>{cartItem.name}</h1>
//         <h3 className="titleCategory">{cartItem.category}</h3>
//       </div>
//       <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
//     </li>
//   ))}
export default BurgerCart;
