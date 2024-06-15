import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    /*console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );*/
  }

  if (!AllRestaurants) return null;

  return AllRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5 mx-2">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-100 hover:bg-red-50 shadow-lg m-2 p-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="search-btn p-2 m-2 bg-purple-900 text-white rounded-xl
           hover:bg-violet-600"
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
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants?.map((res) => {
          return (
            <Link to={"restaurant/" + res.info.id} key={res.info.id}>
              <RestrauntCard {...res.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
