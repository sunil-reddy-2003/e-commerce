import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (existingProduct) {
        return prevCart.map( (p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


    const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar onSearch={setSearchText} />
      <main className="flex-1 bg-white">
        <Outlet context={{ searchText, addToCart ,cartItems,increaseQty,decreaseQty,deleteItem}} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


