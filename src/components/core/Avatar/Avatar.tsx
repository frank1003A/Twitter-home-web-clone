import React, { useEffect, useRef, useState } from "react";
import Menu from "../dropdown/Menu";

//

interface AvatarProps extends React.ComponentPropsWithoutRef<"img"> {
  hasMenu?: boolean;
  avatar?: string;
  username?: string;
  name?: string;
  status?: "blue" | "gold" | "none";
}

const Avatar = ({ src, hasMenu }: AvatarProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      let image = imageRef.current!;

      image.addEventListener("mouseenter", () => setMenuToggle(true));
      image.addEventListener("mouseleave", () => setMenuToggle(false));

      return () => {
        image.removeEventListener("mouseenter", () => setMenuToggle(true));
        image.removeEventListener("mouseleave", () => setMenuToggle(false));
      };
    }
  }, [src]);

  return (
    <>
      <div className="avatar-container">
        {!src ? (
          <div className="avatar-container"></div>
        ) : (
          <img
            src={src}
            ref={imageRef}
            className="img-avatar"
            alt="image_avatar"
            draggable={false}
          />
        )}
      </div>
      {menuToggle && hasMenu && <Menu>{/** */}</Menu>}
    </>
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
