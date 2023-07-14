//import avatar_image from "../../assets/jpg/avatar.jpg";
import goldVerificationBadge from "../../assets/svg/gold-badge.svg";
import blueVerificationBadge from "../../assets/svg/verified-b.svg";
import Avatar from "../Avatar/Avatar";

//
import { ReactNode } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import dots from "../../assets/svg/3dot.svg";
import likeIcon from "../../assets/tweetcontrols/like.svg";
import replyIcon from "../../assets/tweetcontrols/reply.svg";
import retweetIcon from "../../assets/tweetcontrols/retweet.svg";
import shareIcon from "../../assets/tweetcontrols/share.svg";
import viewIcon from "../../assets/tweetcontrols/view.svg";
import IconButton from "../buttons/IconButton";
import TweetIcon from "./TweetIcon";

export interface TweetProps {
  avatar: string;
  username: string;
  name: string;
  /** hours time */
  time: string;
  images?: Array<string>;
  content?: string | ReactNode;
  status: "blue" | "gold" | "none";
  replies: number;
  retweets: number;
  likes: number;
  views: number;
  hasControls?: boolean;
  hasMenu?: boolean;
}
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
  hasControls,
  hasMenu,
}: TweetProps) => {
  const mediaQuery = useMediaQuery("xsm");
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
        <Avatar
          src={avatar}
          hasMenu={hasMenu ? true : hasMenu}
          name={name}
          username={username}
          status={status}
        />
      </div>
      <div className="main">
        <div className="user">
          <div className="dets-one">
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
          </div>
          <div className="dets-two">
            <span className="name">@{name}</span>
            <span className="time">.{time}</span>
          </div>
          {hasControls ? (
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
          ) : (
            ""
          )}
        </div>
        <div className="content">
          {/** TEXT CONTENT HANDLING */}
          {content ? (
            <span className="text-content">{content}</span>
          ) : (
            <>sdskdkskfmdkfmkdfkmd</>
          )}

          {/**IMAGE CONTENT HANDLING */}
          {images && images.length > 1 ? (
            <div className="collage">{collageImageRender}</div>
          ) : (
            images && (
              <div className="image-content">
                <img
                  src={images ? images[0] : ""}
                  alt={`${images ? images[0] : "image"}-media`}
                  draggable={false}
                />
              </div>
            )
          )}
        </div>
        {hasControls ? (
          <div className="controls">
            <TweetIcon icon={replyIcon} value={replies} />
            <TweetIcon icon={retweetIcon} value={retweets} />
            <TweetIcon icon={likeIcon} value={likes} />
            <TweetIcon icon={viewIcon} value={views} />
            <TweetIcon icon={shareIcon} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tweet;
