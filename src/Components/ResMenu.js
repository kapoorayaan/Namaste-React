import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

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
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );

    setn(json?.data?.cards[2]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="focus:bg-green-100 hover:bg-red-100 shadow-lg m-2 p-2">
        <img src={IMG_CDN_URL + n?.cloudinaryImageId} />
        <h1>{n?.name}</h1>
        <h2>City: {n?.city}</h2>
        <h2>Locality: {n?.locality}</h2>
        <h2>Rating: {n?.avgRatingString} stars</h2>
      </div>
      <div>
        <h1 className="focus:bg-green-100 hover:bg-red-100 shadow-lg m-2 p-2">
          Menu
        </h1>
        <div className="focus:bg-green-100 hover:bg-red-100 shadow-lg m-2 p-2">
          <ul>
            {restaurant.map((items) => (
              <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
