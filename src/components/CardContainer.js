import { useMemo } from "react";
import "./CardContainer.css";
const CardContainer = ({
  ellipse224,
  heading2CarServicesAvaila,
  image92,
  wEEKAGO,
  absolutelyRecommendedGara,
  propLeft,
  propBottom,
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      bottom: propBottom,
    };
  }, [propLeft, propBottom]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="group-parent22" style={groupDivStyle}>
      <img className="group-child11" alt="" src="/undefined103.png" />
      <div className="ellipse-group" style={groupDiv1Style}>
        <img className="group-child12" alt="" src={ellipse224} />
        <div
          className="heading-2-car-services-avail-parent3"
          style={groupDiv2Style}
        >
          <div className="heading-29">{heading2CarServicesAvaila}</div>
          <div className="image-91-parent">
            <img className="image-91-icon" alt="" src="/undefined105.png" />
            <img className="image-92-icon" alt="" src={image92} />
            <img className="image-93-icon" alt="" src="/undefined107.png" />
            <img className="image-94-icon" alt="" src="/undefined108.png" />
            <img className="image-95-icon" alt="" src="/undefined109.png" />
          </div>
          <div className="week-ago">{wEEKAGO}</div>
        </div>
      </div>
      <div className="absolutely-recommended-garage-container">
        <p className="absolutely-recommended-garage">
          {absolutelyRecommendedGara}
        </p>
      </div>
    </div>
  );
};

export default CardContainer;
