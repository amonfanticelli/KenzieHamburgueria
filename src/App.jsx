import "./App.css";
import BurgerHeader from "./components/Header";
import BurgerList from "./components/BurgerList";
import BurgerCart from "./components/BurgerCart";
import { useEffect, useState } from "react";
import api from "./services/api";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/react-toastify.css";

function App() {
  const [burgers, setBurgers] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  const notify = () => toast("Wow so easy !");

  const addCartItem = (cartItem) => {
    setCartItens((oldCartItens) => [...oldCartItens, cartItem]);
    notify();
  };

  const removeCartItem = (id) => {
    const newList = cartItens.filter((item) => item.id !== id);

    setCartItens(newList);
  };

  const removeAllCart = (id) => {
    const newList = cartItens.filter((item) => item.id === id);

    setCartItens(newList);
  };

  const search = async (name) => {
    const { data } = await api.get("products", {
      params: name ? { name } : undefined,
    });
    setBurgers(data);
  };

  const totalPrice = cartItens.reduce(
    (acc, inicialValue) => acc + inicialValue.price,
    0
  );

  useEffect(() => {
    search();
    //   api.get().then((response) => {
    //     console.log(response);
    //     setBurgers(response.data);

    //   });
  }, []);

  return (
    <div className="App">
      <BurgerHeader search={search} />
      <div className="UlSectionContainer">
        <BurgerList addCartItem={addCartItem} burgers={burgers} />
        <BurgerCart
          cartItens={cartItens}
          totalPrice={totalPrice}
          removeCartItem={removeCartItem}
          removeAllCart={removeAllCart}
        />
      </div>
    </div>
  );
}

export default App;
