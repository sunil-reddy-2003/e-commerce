import OrderDetails from "../components/OrderDetails";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const { cartItems } = useOutletContext();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("creditCard");

  const Fees = 0;
  const totalPrice = cartItems.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);
  const totalItems = cartItems.reduce((sum, item) => {
    return (sum += item.quantity);
  }, 0);
  const orderHeading = "Order Summary";
  const btnName = "amount payable";

  const [cardFormValues, setCardFormValues] = useState({
    cardNumber: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });
  return (
    <div className=" flex ">
      <div className=" flex flex-col py-8 pl-30 pr-16 w-[75%]">
        <div className="px-16 py-4 font-bold text-xl text-white bg-black mb-2">
          <p>SELECT PAYMENT METHOD</p>
        </div>
        <div className="flex relative w-full bg-slate-800 ">
          <ul className=" flex flex-col w-1/3  font-light text-xl cursor-pointer">
            <li
              className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-1 hover:scale-100 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("creditCard")}
            >
              Credit/ Debit Card
            </li>
            <li
              className=" px-16 py-2  bg-black/60 text-white hover:-translate-y-2 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("netBanking")}
            >
              NetBanking
            </li>
            <li
              className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-2 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("wallet")}
            >
              Wallet
            </li>
            <li
              className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-2 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("upi")}
            >
              UPI
            </li>
            <li
              className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-2 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("emi")}
            >
              EMI
            </li>
            <li
              className=" px-16 py-2 bg-black/60 text-white hover:-translate-y-2 hover:duration-300 hover:bg-black hover:text-white"
              onClick={() => setSelectedPaymentMethod("cod")}
            >
              Cash on delivery
            </li>
          </ul>
          {/* <div className="border bg-red  w-2/3 bg-white px-20">
            <form
              className="flex flex-col items-start justify-center text-lg"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label id="cardnumber">Card number</label>
              <input
                id="cardnumber"
                className="border p-2 rounded-md w-auto"
                value={cardFormValues.cardNumber}
                type="text"
                minLength={16}
                maxLength={16}
                onChange={(e) => {
                  setCardFormValues({
                    ...cardFormValues,
                    cardNumber: e.target.value,
                  });
                }}
              ></input>
              <label htmlFor="name-on-card">Name on card</label>
              <input
                id="name-on-card"
                className="border  p-2 rounded-md w-auto "
                value={cardFormValues.name}
                type="text"
                maxLength={20}
                onChange={(e) => {
                  setCardFormValues({
                    ...cardFormValues,
                    name: e.target.value,
                  });
                }}
              ></input>
              <p htmlFor="">Expiration date</p>
              <div className="flex items-center justify-between  ">
                <select
                  className="border  p-2 rounded-md  "
                  value={cardFormValues.month}
                  onChange={(e) => {
                    setCardFormValues({
                      ...cardFormValues,
                      month: e.target.value,
                    });
                  }}
                >
                  <option value="" disabled hidden>
                    month
                  </option>
                  <option value="01">JAN</option>
                  <option value="02">FEB</option>
                  <option value="03">MAR</option>
                  <option value="04">APR</option>
                  <option value="05">MAY</option>
                  <option value="06">JUN</option>
                  <option value="07">JUL</option>
                  <option value="08">AUG</option>
                  <option value="09">SEP</option>
                  <option value="10">OCT</option>
                  <option value="11">NOV</option>
                  <option value="12">DEC</option>
                </select>
                <div className="flex gap-2 m-2">
                  <label htmlFor="year">Year</label>
                  <input
                    id="year"
                    className="border p-2 w-20 rounded-md"
                    minLength={4}
                    maxLength={4}
                    onChange={(e) => {
                      setCardFormValues({
                        ...cardFormValues,
                        year: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="cvv">cvv</label>
                  <input
                    id="cvv"
                    className="border w-15 p-2 text-xl rounded-md"
                    minLength={3}
                    maxLength={3}
                    onChange={(e) => {
                      setCardFormValues({
                        ...cardFormValues,
                        cvv: e.target.value,
                      });
                    }}
                  ></input>
                </div>
              </div>
              <button className="border rounded-md px-4 py-2 bg-black text-white">
                PAY ₹{totalPrice} SECURELY
              </button>
            </form>
          </div> */}
          {selectedPaymentMethod === "creditCard" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on credit and debit cards
              </p>
            </div>
          )}
          {selectedPaymentMethod === "netBanking" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on netbanking
              </p>
            </div>
          )}
          {selectedPaymentMethod === "wallet" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on wallet balance
              </p>
            </div>
          )}
          {selectedPaymentMethod === "upi" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on UPI
              </p>
            </div>
          )}
          {selectedPaymentMethod === "emi" && (
            <div className="flex flex-col items-center justify-center  w-2/3">
              <p className="flex text-xl font-semi-bold text-white">
                Sorry for the inconvenience...
              </p>
              <p className="flex text-lg font-semi-bold text-white">
                we are currently working on EMI
              </p>
            </div>
          )}
          {selectedPaymentMethod === "cod" && (
            <div className="flex flex-col items-center justify-center  w-2/3 border">
              <p className="font-bold text-2xl ">Select cash on delivery</p>
              <button className="border rounded-md px-4 py-2 bg-black text-white">
                PAY ₹{totalPrice} SECURELY
              </button>
            </div>
          )}
        </div>
      </div>
      <div className=" relative  py-8 pr-4 w-[25%]">
        <OrderDetails
          Fees={Fees}
          totalPrice={totalPrice}
          totalItems={totalItems}
          orderHeading={orderHeading}
          btnName={btnName}
          showAmtPybl={true}
        />
      </div>
    </div>
  );
};

export default Payment;
