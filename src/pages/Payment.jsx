import OrderDetails from "../components/OrderDetails";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const { totalPrice, createOrder, cartItems } = useOutletContext();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash on Delivery");
  const [btnState, setBtnState] = useState(false);

  const orderHeading = "Order Summary";
  const btnName = "amount payable";
  const paymentModes = [
    "Cash on Delivery",
    "Credit/Debit Card",
    "UPI",
    "Net Banking",
    "Wallet",
    "EMI",
  ];

  const [cardFormValues, setCardFormValues] = useState({
    cardNumber: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });

  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center text-black h-90 text-4xl font-bold tracking-widest">
        <h1>Looks like your cart is empty...</h1>
        <Link to="/" className="text-lg underline text-red-700 tracking-wide">
          Start shopping now!
        </Link>
      </div>
    );
  }

  const paymentRequest = async () => {
    if (!cartItems.length) return;
    setBtnState(true);
    const response = await createOrder(selectedPaymentMethod);
    if (response) {
      navigate("/order-success");
    } else {
      setBtnState(false);
    }
  };

  return (
    <div className=" flex ">
      <div className=" flex flex-col w-[75%] m-8 ">
        <div className="p-8 font-black text-xl text-white bg-linear-to-r from-green-800  to-green-400 rounded-t-lg">
          <p>SELECT PAYMENT METHOD</p>
        </div>
        <div className="flex relative w-full bg-slate-800 rounded-b-lg">
          <ul className=" flex flex-col w-1/3  font-light text-xl cursor-pointer">
            {paymentModes.map((mode) => {
              return <li
                className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-1 hover:scale-100 hover:duration-300 hover:bg-purple-500 hover:text-white"
                onClick={() => setSelectedPaymentMethod(mode)}
                key={mode}
              >
                {mode}
              </li>;
            })}
          </ul>
          {selectedPaymentMethod === "Credit/Debit Card" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on credit and debit cards
              </p>
            </div>
          )}
          {selectedPaymentMethod === "Net Banking" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on netbanking
              </p>
            </div>
          )}
          {selectedPaymentMethod === "Wallet" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on wallet balance
              </p>
            </div>
          )}
          {selectedPaymentMethod === "UPI" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on UPI
              </p>
            </div>
          )}
          {selectedPaymentMethod === "EMI" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on EMI
              </p>
            </div>
          )}
          {selectedPaymentMethod === "Cash on Delivery" && (
            <div className="flex flex-col items-center justify-center  w-2/3 ">
              <p className="font-bold text-2xl text-white">
                Click to pay on delivery
              </p>
              <button
                disabled={btnState}
                className={`border rounded-md px-4 py-2 bg-green-600 text-white ${btnState ? "cursor-not-allowed" : "hover:bg-black"}`}
                onClick={() => {
                  if (btnState) return;
                  paymentRequest();
                }}
              >
                CONFIRM ORDER OF ₹{totalPrice}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className=" relative  py-8 pr-4 w-[25%]">
        <OrderDetails
          orderHeading={orderHeading}
          btnName={btnName}
          showAmtPybl={true}
        />
      </div>
    </div>
  );
};

export default Payment;
