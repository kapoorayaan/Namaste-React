import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartItems);
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items</h1>
    </div>
  );
};
export default Cart;
