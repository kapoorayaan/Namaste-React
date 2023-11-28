import { useState } from "react";

const auth = () => {
  //api call to check= authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};
export default Header;
