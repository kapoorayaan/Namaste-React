import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    //API CALL
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2689514&lng=75.5866691&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (!AllRestaurants) return null;

  return AllRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, AllRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((res) => {
          return <RestrauntCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
