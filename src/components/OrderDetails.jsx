import { useNavigate } from "react-router-dom";

const OrderDetails = (props) => {
    const {totalPrice,totalItems,Fees,isLoggedIn,setRedirectAfterLogin}=props;
  const navigate = useNavigate();

  return (
    <div className="relative py-8 pr-4 w-[25%]">
      <div className="sticky top-20 p-8 bg-white/10">
        <h2 className="font-bold text-lg mb-4">Order details</h2>

        {/* MRP Row */}
        <div className="flex justify-between mb-2">
          <span>MRP:</span>
          <span>₹{totalPrice}</span>
        </div>

        {/* Fees Row */}
        <div className="flex justify-between mb-2">
          <span>Fees:</span>
          <span>₹{Fees}</span>
        </div>

        {/* Total Items Row */}
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>

        <div className="border-b-2 my-2"></div>

        {/* Total Price Row */}
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total Price:</span>
          <span>₹{totalPrice}</span>{" "}
          {/* Replace 0 with Fees variable if needed */}
        </div>

        {/* Checkout Button */}
        <button
          className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-white hover:text-black"
          onClick={() => {
            if (isLoggedIn) {
              navigate("/shipping");
            } else {
              setRedirectAfterLogin("/shipping");
              navigate("/log-in");
            }
          }}
        >
          Continue to shipping
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
