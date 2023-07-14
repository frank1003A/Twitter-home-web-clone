const TweetIcon = ({
  icon,
  value,
}: {
  icon: string;
  value?: string | number;
}) => {
  return (
    <div className="twt-icon">
      <div className="icon">
        <img src={icon} alt={`icon-control`} />
      </div>
      <span className="value">{value ? value : ""}</span>
    </div>
  );
};

export default TweetIcon;
