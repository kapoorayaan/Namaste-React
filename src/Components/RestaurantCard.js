import { IMG_CDN_URL, restaurantList } from "../constants";
const RestrauntCard = ({ name, areaName, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          res.info.cloudinaryImageId
        }
      ></img>
      <h1>{res.info.name}</h1>
      <h3>{res.info.areaName}</h3>
    </div>
  );
};
export default RestrauntCard;
