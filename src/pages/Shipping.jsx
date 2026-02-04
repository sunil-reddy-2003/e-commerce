import OrderDetails from "../components/OrderDetails";
import Address from "../components/Address";
const Shipping = (props) => {
  return (
    <div className="flex gap-4  p-2">
      <div className="border border-red-200 p-8 w-[75%] bg-white">
        <div className="border flex flex-col items-start bg-green-100">
          <div className="flex  p-4">
            <i className="fa-solid fa-location-dot text-4xl p-2"></i>
            <div>
              <h2 className="text-2xl font-bold">Delivery Address</h2>
              <p className="font-light">
                We will deliver your order to this address
              </p>
              <button className="border">Add Address</button>
              <Address/>
            </div>
            
          </div>
          
        </div>
      </div>
      <div className="relative border border-red-200 py-8 pr-4 w-[25%]">
        <OrderDetails />
      </div>
    </div>
  );
};
export default Shipping;
