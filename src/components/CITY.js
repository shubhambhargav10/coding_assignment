import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CITY.css";
const CITY = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="city">
      <div className="city-child" />
      <img className="city-item" alt="" src="/undefined137.png" />
      <div className="select-your-city">Select your City</div>
      <div className="new-delhi">New Delhi</div>
      <div className="mumbai">Mumbai</div>
      <div className="agra">Agra</div>
      <img className="mask-group-icon1" alt="" src="/undefined138.png" />
      <div className="city-inner" />
      <div className="rectangle-container">
        <div className="group-child6" />
        <img className="image-106-icon" alt="" src="/undefined139.png" />
        <div className="search">{`Search `}</div>
      </div>
      <div className="hyderabad-group" onClick={onGroupContainer1Click}>
        <div className="hyderabad1">Hyderabad</div>
        <img className="image-149-icon" alt="" src="/undefined140.png" />
      </div>
      <img className="mask-group-icon2" alt="" src="/undefined141.png" />
      <img className="image-151-icon" alt="" src="/undefined142.png" />
      <img className="image-152-icon" alt="" src="/undefined143.png" />
    </div>
  );
};

export default CITY;
