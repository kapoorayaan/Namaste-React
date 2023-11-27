import { IMG_CDN_URL, restaurantList } from "../constants";
const RestrauntCard = ({
  name,
  areaName,
  cloudinaryImageId,
  costForTwo,
  avgRatingString,
  cuisines,
  id,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>Location: {areaName}</h4>
      <h5>Average Rating {avgRatingString}</h5>
    </div>
  );
};
export default RestrauntCard;
