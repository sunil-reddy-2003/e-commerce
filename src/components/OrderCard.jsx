import { useNavigate } from "react-router-dom";
const OrderCard = (props) => {
  const { order, date, month, year } = props;
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col m-1 w-full hover:-translate-y-0 hover:scale-98  duration-600  cursor-pointer  rounded-lg hover:bg-purple-200"
      onClick={() => {
        navigate(`/orders/${order.orderId}`);
      }}
    >
      <div className="flex items-center justify-between px-8 rounded-t-lg  backdrop-blur-xl  bg-white/60  ">
        <div className=" ">
          <p className="text-lg  font-bold pt-2">Order Placed on</p>
          <p className="text-md">{date + " " + month + " " + year}</p>
        </div>
        <p className="text-lg   ">
          Order Id <span className="font-semibold underline decoration-dotted">{order.orderId}</span>
        </p>
      </div>
      <div className="flex flex-col px-8 py-4  bg-black/10 rounded-b-lg">
        <p className="text-md flex  gap-4">
          <span>Price : </span>
          <span>₹{order.priceDetails.totalPrice}</span>
        </p>

        <p className="text-md flex gap-4">
          <span>Items : </span>
          <span>{order.priceDetails.quantity}</span>
        </p>

        <p className="text-md flex gap-4">
          <span>Status : </span>
          <span>{order.status}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
