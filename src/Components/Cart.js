import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatchEvent = useDispatch();
  const handleClearCart = () => {
    dispatchEvent(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items- {cartItem?.length}</h1>
      <button
        className="p-2 m-5 bg-green-400"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItem.map((item) => (
          <FoodItem key={item.card.info.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
