import dots from "../../assets/svg/3dot.svg";
import IconButton from "../buttons/IconButton";

interface TrendProps {
  name: string;
  tweetVolume: string;
  category: string;
}

const Trend = ({ name, tweetVolume, category }: TrendProps) => {
  return (
    <div className="trend">
      <section className="header">
        <span className="category">{category}</span>.Trending
      </section>
      <IconButton style={{ marginLeft: "auto", padding: 5 }}>
        <img src={dots} alt="dots_svg" />
      </IconButton>
      <section className="name">{name}</section>
      <section className="twith">
        <span className="trend-count">{tweetVolume}</span>
        <span className="tend-text">Tweets</span>
      </section>
    </div>
  );
};

export default Trend;
