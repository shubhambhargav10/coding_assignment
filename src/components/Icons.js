import { useMemo } from "react";
import "./Icons.css";
const Icons = ({ iconsWidth, iconsHeight }) => {
  const iconsStyle = useMemo(() => {
    return {
      width: iconsWidth,
      height: iconsHeight,
    };
  }, [iconsWidth, iconsHeight]);

  return (
    <div className="icons2" style={iconsStyle}>
      <img className="icons-child" alt="" src="/undefined28.png" />
      <img className="icons-child" alt="" src="/undefined29.png" />
    </div>
  );
};

export default Icons;
