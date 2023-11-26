import { IMG_CDN_URL, restaurantList } from "../constants";
const RestrauntCard = ({
  name,
  areaName,
  cloudinaryImageId,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h1>{name}</h1>
      <h2>{costForTwo}</h2>
      <h3>{areaName}</h3>
      <h4>Average Rating {avgRatingString}</h4>
    </div>
  );
};
export default RestrauntCard;
