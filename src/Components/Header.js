import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../UserContext";
import { useSelector } from "react-redux";

const auth = () => {
  //api call to check= authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="h-28 pl-2 "
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-100">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <Link to="/About">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instaMart">
            <li className="px-2">InstaMart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      {<h1 className="p-10 font-bold text-red-900">{user.name}</h1>}
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};
export default Header;
