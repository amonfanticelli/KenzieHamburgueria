import BurgerCard from "../BurgerCard";
import { List } from "./style";

const BurgerList = ({ burgers, addCartItem }) => {
  return (
    <List>
      {burgers.map((burger) => (
        <BurgerCard addCartItem={addCartItem} key={burger.id} burger={burger} />
      ))}
    </List>
  );
};

export default BurgerList;
