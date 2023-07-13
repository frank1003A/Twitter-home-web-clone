import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface LoaderProps extends React.ComponentPropsWithoutRef<"div"> {
  count: number;
  countView: number | string;
}

const Loader = ({ count, countView }: LoaderProps) => {
  const { theme } = useContext(ThemeContext);

  const max = 300;
  const warn = max - 20;
  const handlePathColorChange = () => {
    if (count > max - 1) {
      return "#ff0000";
    } else if (count <= max && count >= warn) {
      return "#ffff00";
    } else if (count > 310) {
      return getTheme;
    } else {
      return "#1d9bf0";
    }
  };

  const handleTrailColorChange = () => {
    let trailTheme = theme === "light" ? "#eff3f4" : "#38444d";
    if (count > max + 10) return getTheme;
    return trailTheme;
  };

  const getTheme = theme === "dark" ? "#15202b" : "#ffffff";

  return (
    <div
      style={{
        width: count >= warn ? 30 : 25,
        height: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {count > max + 10 ? (
        <p
          style={{
            color: "rgb(244, 33, 46)",
            fontSize: 15,
          }}
        >
          {countView}
        </p>
      ) : (
        <CircularProgressbar
          value={count}
          maxValue={300}
          text={count >= warn ? countView.toString() : ""}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: count >= warn ? "40px" : "30px",
            pathTransitionDuration: 0,
            textColor: count > max - 1 ? "rgb(244, 33, 46)" : "#8b98a5",
            trailColor: handleTrailColorChange(),
            pathColor: handlePathColorChange(),
          })}
        />
      )}
    </div>
  );
};

export default Loader;
