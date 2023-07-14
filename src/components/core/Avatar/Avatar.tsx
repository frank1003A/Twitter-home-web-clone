import React, { useEffect, useRef, useState } from "react";
import Menu from "../dropdown/Menu";

//
import useOnClickOutside from "hooks/useOnClickOutside";
import goldVerificationBadge from "../../assets/svg/gold-badge.svg";
import blueVerificationBadge from "../../assets/svg/verified-b.svg";
import Button from "../buttons/Button";
interface AvatarProps extends React.ComponentPropsWithoutRef<"img"> {
  hasMenu?: boolean;
  avatar?: string;
  username?: string;
  name?: string;
  status?: "blue" | "gold" | "none";
}

const Avatar = ({ src, hasMenu, username, status, name }: AvatarProps) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useOnClickOutside(menuRef, () => setMenuToggle(false));

  const handleMouseLeaveOnMenu = () => {
    if (menuToggle === true) {
      setMenuToggle(false);
    } else {
      setMenuToggle(true);
    }
  };

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (src) {
      let image = parentRef.current!;

      image.addEventListener("mouseenter", () => {
        setMenuToggle(true);
        setMenuPosition({ x: -80, y: -270 });
      });
      image.addEventListener("mouseleave", () => setMenuToggle(false));

      return () => {
        image.addEventListener("mouseenter", () => setMenuToggle(true));
        image.addEventListener("mouseleave", () => setMenuToggle(false));
      };
    }
  }, [src]);

  return (
    <div ref={parentRef} onContextMenu={handleContextMenu}>
      <div className="avatar-container">
        {!src ? (
          <div className="avatar-container"></div>
        ) : (
          <img
            src={src}
            className="img-avatar"
            alt="image_avatar"
            draggable={false}
          />
        )}
      </div>
      {menuToggle && hasMenu && (
        <Menu
          ref={menuRef}
          onMouseLeave={() => handleMouseLeaveOnMenu()}
          autoFocus
          style={{
            /** used to keep the menu close enough to focus*/
            top: menuPosition.y,
            left: menuPosition.x,
          }}
        >
          <div className="follow-card">
            <div style={{ position: "absolute", right: 16, top: 16 }}>
              <Button className="follow-btn">follow</Button>
            </div>
            <div className="user">
              <div className="avatar-container">
                {!src ? (
                  <div className="avatar-container"></div>
                ) : (
                  <img
                    src={src}
                    className="img-avatar"
                    alt="image_avatar"
                    draggable={false}
                  />
                )}
              </div>
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
              <span className="name">@{name}</span>

              <span className="text">
                Lorem ipsum dolor, sit amet consectetur{" "}
                <a href="/loremipsum">Lorem ipsum</a> elit. Ut iste tempore
                cumque rem magnam. Magnam sint eius mollitia quasi
                repudiandae,in eligendi quod quia magni.
              </span>
            </div>
            <div className="follow_count">
              <span className="following">
                <span className="count">145</span>Following
              </span>
              <span className="followers">
                <span className="count">20</span>Followers
              </span>
            </div>
          </div>
        </Menu>
      )}
    </div>
  );
};

export default Avatar;

/** <Row>
          <Column>
            <Avatar src={avatar ? avatar : src} alt="avatar_on_menu" />
            <Row>
              {username}
              <span className="badge">
                {/** BADGE VARIANTS HANDLING}
                <img
                  src={
                    status === "blue"
                      ? blueVerificationBadge
                      : goldVerificationBadge
                  }
                  alt="verified_badge"
                />
              </span>
            </Row>
          </Column>
          <Button style={{ backgroundColor: "white", color: "black" }}>
            Follow
          </Button>
        </Row> */
