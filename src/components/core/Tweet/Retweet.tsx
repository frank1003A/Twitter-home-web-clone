//import avatar_image from "../../assets/jpg/avatar.jpg";
import goldVerificationBadge from "../../assets/svg/gold-badge.svg";
import blueVerificationBadge from "../../assets/svg/verified-b.svg";
import Avatar from "../Avatar/Avatar";

//
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import dots from "../../assets/svg/3dot.svg";
import likeIcon from "../../assets/tweetcontrols/like.svg";
import replyIcon from "../../assets/tweetcontrols/reply.svg";
import retweetIcon from "../../assets/tweetcontrols/retweet.svg";
import shareIcon from "../../assets/tweetcontrols/share.svg";
import viewIcon from "../../assets/tweetcontrols/view.svg";
import IconButton from "../buttons/IconButton";
import Tweet, { TweetProps } from "./Tweet";
import TweetIcon from "./TweetIcon";

interface RetweetContent {
  content: Omit<TweetProps, "retweetContent">;
}
export interface RetweetProps {
  tweet: TweetProps;
  retweetContent: RetweetContent["content"];
}

const Retweet = ({ tweet, retweetContent }: RetweetProps) => {
  const mediaQuery = useMediaQuery("xsm");
  const collageImageRender = tweet.images?.map((img, idx) => {
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
    <div className="retweet">
      <div className="avatar-wrap">
        <Avatar
          src={tweet.avatar}
          hasMenu
          name={tweet.name}
          username={tweet.username}
          status={tweet.status}
        />
      </div>
      <div className="main">
        <div className="user">
          <div className="dets-one">
            <span className="username">
              <a href="/profile">{tweet.username}</a>
            </span>
            {tweet.status !== "none" && (
              <span className="badge">
                {/** BADGE VARIANTS HANDLING */}
                <img
                  src={
                    tweet.status === "blue"
                      ? blueVerificationBadge
                      : goldVerificationBadge
                  }
                  alt="verified_badge"
                  draggable={false}
                />
              </span>
            )}
          </div>
          <div className="dets-two">
            <span className="name">@{tweet.name}</span>
            <span className="time">.{tweet.time}</span>
          </div>
          <IconButton
            style={{
              marginLeft: "auto",
              padding: 5,
              position: "absolute",
              right: mediaQuery ? 20 : 5,
              top: 5,
              zIndex: 2,
            }}
          >
            <img src={dots} alt="dots_svg" />
          </IconButton>
        </div>
        <div className="content">
          {/** TEXT CONTENT HANDLING */}
          {tweet.content ? (
            <span className="text-content">{tweet.content}</span>
          ) : (
            <>sdskdkskfmdkfmkdfkmd</>
          )}

          {/**IMAGE HANDLING */}
          {tweet.images && tweet.images.length > 1 ? (
            <div className="collage">{collageImageRender}</div>
          ) : (
            tweet.images && (
              <div className="image-content">
                <img
                  src={tweet.images ? tweet.images[0] : ""}
                  alt={`${tweet.images ? tweet.images[0] : "image"}-media`}
                  draggable={false}
                />
              </div>
            )
          )}

          {retweetContent ? <Tweet hasMenu {...retweetContent} /> : ""}
        </div>
        <div className="controls">
          <TweetIcon icon={replyIcon} value={tweet.replies} />
          <TweetIcon icon={retweetIcon} value={tweet.retweets} />
          <TweetIcon icon={likeIcon} value={tweet.likes} />
          <TweetIcon icon={viewIcon} value={tweet.views} />
          <TweetIcon icon={shareIcon} />
        </div>
      </div>
    </div>
  );
};

export default Retweet;
