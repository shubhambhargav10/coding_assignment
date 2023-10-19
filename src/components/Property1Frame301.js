import { useMemo } from "react";
import "./Property1Frame301.css";
const Property1Frame301 = ({
  star1,
  icExpandMoresvg,
  property1Frame301TextDecoration,
  property1Frame301Position,
  property1Frame301Top,
  property1Frame301Left,
  frameDivOverflow,
}) => {
  const property1Frame301Style = useMemo(() => {
    return {
      textDecoration: property1Frame301TextDecoration,
      position: property1Frame301Position,
      top: property1Frame301Top,
      left: property1Frame301Left,
    };
  }, [
    property1Frame301TextDecoration,
    property1Frame301Position,
    property1Frame301Top,
    property1Frame301Left,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      overflow: frameDivOverflow,
    };
  }, [frameDivOverflow]);

  return (
    <div className="property-1frame-301" style={property1Frame301Style}>
      <div className="property-1frame-301-child" />
      <div className="get-instant-quotes">
        Get instant quotes for your car service
      </div>
      <div className="rating-parent">
        <div className="rating">Rating</div>
        <div className="star-parent">
          <img className="frame-item" alt="" src={star1} />
          <div className="div">4.7 / 5</div>
        </div>
      </div>
      <div className="property-1frame-301-inner" style={frameDiv1Style}>
        <div className="select-your-car-parent">
          <div className="select-your-car">Select your Car</div>
          <img
            className="ic-expand-moresvg-icon"
            alt=""
            src={icExpandMoresvg}
          />
        </div>
      </div>
      <div className="frame-div">
        <div className="enter-your-mobile-number-wrapper">
          <div className="select-your-car">Enter your Mobile Number</div>
        </div>
      </div>
      <div className="check-prices-for-free-wrapper">
        <div className="check-prices-for">Check Prices For Free</div>
      </div>
      <div className="book-your-car-container">
        <p className="book-your-car">Book your Car</p>
        <p className="book-your-car">Service Now !</p>
      </div>
    </div>
  );
};

export default Property1Frame301;
