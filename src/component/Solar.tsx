import SolarSvg from "../img/Solar.svg";

interface SolarProps {
  children?: any;
  size: number;
}
const Solar: React.FC<SolarProps> = ({ children, size }) => {
  const Style: React.CSSProperties = {
    width: size + "rem",
    height: size + "rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    verticalAlign: "middle",
    textAlign: "center",
    margin: "auto",
    filter: "drop-shadow(0 0 20px #f3ad0d)",
  };
  return (
    <div style={{ width: "100%" }}>
      <img src={SolarSvg} style={Style} />
      {children}
    </div>
  );
};

export default Solar;
