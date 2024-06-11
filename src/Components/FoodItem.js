import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, ratings, category, price }) => {
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>Rating: {ratings.aggregatedRating.rating}</h3>
      <h4>Category: {category}</h4>
      <h5>Price- {price / 100} Rs</h5>
    </div>
  );
};
export default FoodItem;
