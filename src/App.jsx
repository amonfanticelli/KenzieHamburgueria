import "./App.css";
import BurgerHeader from "./components/Header";
import BurgerList from "./components/BurgerList";
import BurgerCart from "./components/BurgerCart";
import { useEffect, useState } from "react";
import api from "./services/api";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [burgers, setBurgers] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  const notifyAddCart = () =>
    toast.success("Adicionado ao carrinho!", { autoClose: 1000 });

  const notifyRemoveFromCart = () =>
    toast.error("Removido do carrinho!", { autoClose: 1000 });

  const addCartItem = (cartItem) => {
    setCartItens((oldCartItens) => [...oldCartItens, cartItem]);
    notifyAddCart();
  };

  const removeCartItem = (id) => {
    const newList = cartItens.filter((item) => item.id !== id);

    setCartItens(newList);
    notifyRemoveFromCart();
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
