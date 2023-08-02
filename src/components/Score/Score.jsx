import { useContext } from "react";
import c from "./Score.module.scss";
import { dataContext } from "../../Context";
const Score = () => {
  const data = useContext(dataContext);
  const styleCross = data.whoseMove === "cross" ? true : false;
  const styleCircle = data.whoseMove === "circle" ? true : false;
  return (
    <div className={c.score}>
      <div
        className={c.player}
        style={{
          color: "rgb(108, 160, 180)",
          borderBottom: styleCross && "4px solid rgb(108, 160, 180)",
        }}
      >
        x - {data.cross}
      </div>
      <div
        className={c.player}
        style={{
          color: "rgb(137, 100, 196)",
          borderBottom: styleCircle && "4px solid rgb(137, 100, 196)",
        }}
      >
        o - {data.circle}
      </div>
    </div>
  );
};

export default Score;
