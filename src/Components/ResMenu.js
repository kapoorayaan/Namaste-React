import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { addItem, reomveItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResMenu = () => {
  const { resId } = useParams();
  const [restaurant, setrestaurant] = useState(null);
  const [n, setn] = useState(null);
  useEffect(() => {
    getResInfo();
  }, []);

  async function getResInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2689847&lng=75.5867284&restaurantId=" +
        resId
    );
    const json = await data.json();
    setrestaurant(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    /*console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );*/

    setn(json?.data?.cards[2]?.card?.card?.info);
  }
  const dispatchEvent = useDispatch();
  const handleRemoveItem = () => {
    dispatchEvent(clearCart());
  };
  const addFoodItem = (items) => {
    dispatchEvent(addItem(items));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <img className="w-52 p-3" src={IMG_CDN_URL + n?.cloudinaryImageId} />
        <h1>{n?.name}</h1>
        <h2>City: {n?.city}</h2>
        <h2>Locality: {n?.locality}</h2>
        <h2>Rating: {n?.avgRatingString} stars</h2>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-400"
          onClick={() => handleRemoveItem()}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <h1>Menu</h1>
        <div>
          <ul>
            {restaurant.map((items) => (
              <li key={items?.card?.info?.id}>
                {items?.card?.info?.name} -
                <button
                  title="Add New"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                  onClick={() => addFoodItem(items)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    class="stroke-orange-400 fill-none group-hover:fill-orange-800 group-active:stroke-orange-200 group-active:fill-orange-600 group-active:duration-0 duration-300"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      strokeWidth="1.5"
                    ></path>
                    <path d="M8 12H16" strokeWidth="1.5"></path>
                    <path d="M12 16V8" strokeWidth="1.5"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
