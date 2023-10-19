import { useMemo } from "react";
import "./FrameComponent.css";
const FrameComponent = ({
  line122,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  rectangleDivBorderRadius,
  ourServicesColor,
  curatedCustomServiceCursor,
  howCarServiceCursor,
  ratingReviewsCursor,
  onCuratedCustomServiceClick,
  onHowCarServiceClick,
  onRatingReviewsClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBorderRadius]);

  const ourServicesStyle = useMemo(() => {
    return {
      color: ourServicesColor,
    };
  }, [ourServicesColor]);

  const curatedCustomServiceStyle = useMemo(() => {
    return {
      cursor: curatedCustomServiceCursor,
    };
  }, [curatedCustomServiceCursor]);

  const howCarServiceStyle = useMemo(() => {
    return {
      cursor: howCarServiceCursor,
    };
  }, [howCarServiceCursor]);

  const ratingReviewsStyle = useMemo(() => {
    return {
      cursor: ratingReviewsCursor,
    };
  }, [ratingReviewsCursor]);

  return (
    <div className="rectangle-parent" style={frameDivStyle}>
      <div className="component-child" style={rectangleDivStyle} />
      <div className="frame-parent">
        <div className="our-services-parent">
          <div className="our-services" style={ourServicesStyle}>
            Our Services
          </div>
          <img className="frame-child" alt="" src={line122} />
        </div>
        <div
          className="curated-custom-service"
          style={curatedCustomServiceStyle}
          onClick={onCuratedCustomServiceClick}
        >
          Curated Custom Service
        </div>
        <div
          className="curated-custom-service"
          style={howCarServiceStyle}
          onClick={onHowCarServiceClick}
        >
          How Car Service Works?
        </div>
        <div
          className="curated-custom-service"
          style={ratingReviewsStyle}
          onClick={onRatingReviewsClick}
        >{`Rating & Reviews`}</div>
        <div className="curated-custom-service">Price List</div>
        <div className="curated-custom-service">Frequently Asked Question</div>
      </div>
    </div>
  );
};

export default FrameComponent;
