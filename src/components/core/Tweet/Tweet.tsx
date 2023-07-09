//import avatar_image from "../../assets/jpg/avatar.jpg";
import goldVerificationBadge from "../../assets/svg/gold-badge.svg";
import blueVerificationBadge from "../../assets/svg/verified-b.svg";
import Avatar from "../Avatar/Avatar";

//
import dots from "../../assets/svg/3dot.svg";
import likeIcon from "../../assets/tweetcontrols/like.svg";
import replyIcon from "../../assets/tweetcontrols/reply.svg";
import retweetIcon from "../../assets/tweetcontrols/retweet.svg";
import shareIcon from "../../assets/tweetcontrols/share.svg";
import viewIcon from "../../assets/tweetcontrols/view.svg";
import IconButton from "../buttons/IconButton";

interface TweetProps {
  avatar: string;
  username: string;
  name: string;
  /** hours time */
  time: string;
  images?: Array<string>;
  content?: string;
  status: "blue" | "gold" | "none";
  replies: number;
  retweets: number;
  likes: number;
  views: number;
}

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
const Tweet = ({
  content,
  avatar,
  images,
  name,
  username,
  replies,
  likes,
  retweets,
  status,
  time,
  views,
}: TweetProps) => {
  const collageImageRender = images?.map((img, idx) => {
    return (
      <img
        src={img}
        alt={`${img}_${idx.toString()}`}
        key={`${img}_${idx.toString()}`}
        draggable={false}
      />
    );
  });
  return (
    <div className="tweet">
      <div className="avatar-wrap">
        <Avatar src={avatar} hasMenu />
      </div>
      <div className="main">
        <div className="user">
          <span className="username">
            <a href="/profile">{username}</a>
          </span>
          {status !== "none" && (
            <span className="badge">
              {/** BADGE VARIANTS HANDLING */}
              <img
                src={
                  status === "blue"
                    ? blueVerificationBadge
                    : goldVerificationBadge
                }
                alt="verified_badge"
                draggable={false}
              />
            </span>
          )}
          <span className="name">@{name}</span>
          <span className="time">.{time}</span>
          <IconButton
            style={{
              marginLeft: "auto",
              padding: 5,
              position: "absolute",
              right: 5,
              top: 5,
              zIndex: 2,
            }}
          >
            <img src={dots} alt="dots_svg" />
          </IconButton>
        </div>
        <div className="content">
          {/** TEXT CONTENT HANDLING */}
          {content ? (
            <span className="text-content">{content}</span>
          ) : (
            <>
              sdskdkskfmdkfmkdfkmd
              <div>
                <br />
              </div>
              <div>dsdsfdfdfd</div>
              <div>
                <br />
              </div>
              <div>fsfsfsfsf</div>
              <div>
                <br />
              </div>
              <div>🥞🥙🥙🥪🥪🥟🥟</div>
              <div>
                <br />
              </div>
            </>
          )}

          {/**IMAGE HANDLING */}
          {images && images.length > 1 ? (
            <div className="collage">{collageImageRender}</div>
          ) : (
            images && (
              <div className="image-content">
                <img
                  src={images && images[0]}
                  alt={`${images && images[0]}-media`}
                  draggable={false}
                />
              </div>
            )
          )}
        </div>
        <div className="controls">
          <TweetIcon icon={replyIcon} value={replies} />
          <TweetIcon icon={retweetIcon} value={retweets} />
          <TweetIcon icon={likeIcon} value={likes} />
          <TweetIcon icon={viewIcon} value={views} />
          <TweetIcon icon={shareIcon} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
