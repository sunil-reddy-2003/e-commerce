import { useOutletContext } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, deleteItem } =
    useOutletContext();
  const { isLoggedIn, setRedirectAfterLogin } = useAuth();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const Fees = 0;

  return cartItems.length !== 0 ? (
    <div className="flex ">
      <div className="w-[75%] p-4 m-4">
        {cartItems.map((product) => {
          return (
            <CartItemCard
              product={product}
              key={product.id}
              onIncrease={() => increaseQty(product.id)}
              onDecrease={() => decreaseQty(product.id)}
              onDelete={() => deleteItem(product.id)}
            />
          );
        })}
      </div>
      <OrderDetails
        totalPrice={totalPrice}
        totalItems={totalItems}
        Fees={Fees}
        isLoggedIn={isLoggedIn}
        setRedirectAfterLogin={setRedirectAfterLogin}
      />
    </div>
  ) : (
    // <div className="flex justify-center items-center h-84 text-5xl font-extrabold text-white"> Cart is empty...</div>
    <div className="flex flex-col justify-center items-center h-84 text-center text-xl font-semibold text-gray-700 m-10">
      <div className="fa-solid fa-cart-arrow-down text-white text-8xl p-4 md:block"></div>

      <p className="text-white font-bold text-md">
        Your cart is looking a little empty 😔
      </p>

      <button
        className="m-4 px-18 py-2 bg-white text-sm border-white text-black rounded hover:bg-green-500 hover:text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
};
export default Cart;
