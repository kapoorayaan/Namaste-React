import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const { resId } = useParams();
  const [restaurant, setrestaurant] = useState(null);
  const [n, setn] = useState();

  useEffect(() => {
    getResInfo();
  }, []);

  async function getResInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2689514&lng=75.5866691&restaurantId=" +
        resId
    );
    const json = await data.json();
    setrestaurant(
      json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setn(json.data?.cards[0].card.card.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img src={IMG_CDN_URL + n.cloudinaryImageId} />
        <h1>{n.name}</h1>
        <h2>City: {n.city}</h2>
        <h2>Locality: {n.locality}</h2>
        <h2>Rating: {n.avgRatingString} stars</h2>
      </div>
      <div>
        <h1> Menu</h1>
        <ul>
          {restaurant?.map((res) => (
            <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResMenu;
