import { useCallback } from "react";
import "./MORE.css";
const MORE = ({ onClose }) => {
  

  return (
    <div className="more1">
      <div className="more-child" />
      <div className="faq-parent">
        <div className="faq">
          FAQ
        </div>
        <div className="faq">
          Contact US
        </div>
        <div className="faq" >
          Terms
        </div>
        <div className="faq">
          Privacy
        </div>
        <div className="faq">
          Offers
        </div>
        <div className="faq" >
          Reviews
        </div>
      </div>
      <img className="more-item" alt="" src="/undefined137.png" />
    </div>
  );
};

export default MORE;
