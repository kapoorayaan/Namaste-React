import { IMG_CDN_URL, restaurantList } from "../constants";
const RestrauntCard = ({
  name,
  areaName,
  cloudinaryImageId,
  costForTwo,
  avgRatingString,
  cuisines,
}) => {
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>Location: {areaName}</h4>
      <h5>Average Rating {avgRatingString}</h5>
    </div>
  );
};
export default RestrauntCard;
