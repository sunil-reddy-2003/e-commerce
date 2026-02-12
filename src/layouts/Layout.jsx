import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState({});

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (existingProduct) {
        return prevCart.map((p) =>
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

  const totalPrice = cartItems.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => {
    return (sum += item.quantity);
  }, 0);

  const paymentLabels = {
    cod: "Cash on Delivery",
    creditCard: "Credit/Debit Card",
    upi: "UPI",
    netBanking: "Net Banking",
    wallet: "Wallet",
    emi: "EMI",
  };

  const priceDetails = {
    fees: 0,
    totalPrice: totalPrice,
    quantity: totalItems,
  };

  const orderComplete = (paymentMethod) => {
    const date = new Date();
    const dateArr = date.toDateString().split(" ");
    const uniqueId = "SUPE" + Date.now();
    console.log(uniqueId);
    const newOrder = {
      orderId: uniqueId,
      items: cartItems,
      priceDetails: priceDetails,
      status: "PLACED",
      paymentMethod: paymentLabels[paymentMethod],
      address: address,
      date: dateArr[2] + " " + dateArr[1] + " " + dateArr[3],
    };

    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });

    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black/20 via-black/50 to-black/20">
      <NavBar onSearch={setSearchText} cartTotal={totalItems} />
      <main className="flex-1 ">
        <Outlet
          context={{
            searchText,
            addToCart,
            cartItems,
            increaseQty,
            decreaseQty,
            deleteItem,
            orderComplete,
            orders,
            address,
            setAddress,
          }}
        />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
