import IconButton from "../core/buttons/IconButton";
import LinkButton from "../core/buttons/LinkButton";

// Icons
import tDot from "../assets/svg/3dot.svg";
import bIcon from "../assets/svg/bookmarks.svg";
import eIcon from "../assets/svg/explore.svg";
import hIcon from "../assets/svg/home.svg";
import lIcon from "../assets/svg/list.svg";
import msIcon from "../assets/svg/messages-1.svg";
import mIcon from "../assets/svg/more.svg";
import nIcon from "../assets/svg/notifications.svg";
import pIcon from "../assets/svg/profile.svg";
import vIcon from "../assets/svg/verified.svg";
import wtl from "../assets/svg/xlogo.svg";

import Avatar from "../core/Avatar/Avatar";
import Button from "../core/buttons/Button";
import UserCard from "../core/cards/UserCard";

// Image
import Menu from "components/core/dropdown/Menu";
import { ThemeContext } from "context/ThemeContext";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useContext, useRef, useState } from "react";
import avatar_image from "../assets/jpg/avatar.jpg";
import flower from "../assets/svg/flower.svg";
import Column from "../core/lists/Column";

import TweetModal from "components/core/Tweet/TweetModal";

const Header = () => {
  // more popup
  const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);

  // Modal
  const [isOpen, setOpenModal] = useState<boolean>(false);

  // Theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(menuRef, () => setShowSettingsMenu(false));

  let activeBg = "#1da1f2";
  let inActiveBg = theme === "dark" ? "#ffffff" : "#555";

  const links: {
    title: string;
    icon: string;
    badge?: number;
    updateBadge?: boolean;
  }[] = [
    { title: "Home", icon: hIcon, updateBadge: true },
    { title: "Explore", icon: eIcon },
    { title: "Notification", icon: nIcon, badge: 5 },
    { title: "Messages", icon: msIcon, badge: 2 },
    { title: "Lists", icon: lIcon },
    { title: "Bookmarks", icon: bIcon },
    { title: "Verified", icon: vIcon },
    { title: "Profile", icon: pIcon },
  ];

  const navLinks = links.map((link, index) => {
    return (
      <LinkButton href={`/${link.title}`} key={`${link.title}`}>
        <div className="img-wrapper">
          {link.badge && <span className="badge">{link.badge}</span>}
          {link.updateBadge && <span className="update-badge" />}
          <img src={link.icon} alt={`${link.title}_icon`} />
        </div>
        <span className="title">{link.title}</span>
      </LinkButton>
    );
  });

  return (
    <header role="navigation">
      <div className="wrapper">
        <section className="icon">
          <IconButton id="logo">
            <img src={wtl} alt="white-twitter-logo" />
          </IconButton>
        </section>
        <section className="navigation" role="navigation">
          {navLinks}
        </section>

        <Button
          className="settings-btn"
          onClick={() => setShowSettingsMenu(!showSettingsMenu)}
        >
          <div className="img-wrapper">
            <img src={mIcon} alt={`more_icon`} />
          </div>
          <span className="title">More</span>
        </Button>
        {showSettingsMenu && (
          <Menu
            ref={menuRef}
            style={{
              top: "60%",
              left: "30%",
              padding: "16px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              className="mode-btn"
              onClick={toggleTheme}
              style={{
                border: `1px solid ${
                  theme === "light" ? inActiveBg : activeBg
                }`,
                color: theme === "light" ? inActiveBg : activeBg,
                background: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: theme === "light" ? "not-allowed" : "pointer",
                opacity: theme === "light" ? 0.5 : 1,
              }}
              disabled={theme === "light" && true}
            >
              <span
                className="color"
                style={{
                  border: `1px solid ${
                    theme === "light" ? inActiveBg : activeBg
                  }`,
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>
              <span className="text">light</span>
            </button>
            <hr />
            <button
              className="mode-btn"
              onClick={toggleTheme}
              style={{
                border:
                  theme === "dark"
                    ? `1px solid ${inActiveBg}`
                    : `1px solid ${activeBg}`,
                color: theme === "dark" ? inActiveBg : `${activeBg}`,
                background: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: theme === "dark" ? "not-allowed" : "pointer",
                opacity: theme === "dark" ? 0.5 : 1,
              }}
              disabled={theme === "dark" && true}
            >
              <span
                className="color"
                style={{
                  border:
                    theme === "dark"
                      ? `1px solid ${inActiveBg}`
                      : `1px solid ${activeBg}`,
                }}
              ></span>
              <span className="text">dim</span>
            </button>
          </Menu>
        )}

        <Button
          className="btn primary"
          id="btn_desk"
          style={{ marginTop: 5, minHeight: 50 }}
          onClick={() => setOpenModal(true)}
        >
          Tweet
        </Button>

        {/** mobile tweet button */}
        <Button
          className="btn primary"
          id="btn_mob"
          style={{ marginTop: 5, minHeight: 50 }}
          onClick={() => setOpenModal(true)}
        >
          <img src={flower} alt="flower_icon" />
        </Button>
        <UserCard>
          <Avatar src={avatar_image} />
          <Column className="details">
            <span className="name">Frank Ezene</span>
            <span className="user-name">@FrankEzene</span>
          </Column>
          <IconButton>
            <img src={tDot} alt="3dots-icon" />
          </IconButton>
        </UserCard>
      </div>
      <TweetModal
        isOpen={isOpen}
        handleCloseModal={() => setOpenModal(false)}
      />
    </header>
  );
};

export default Header;
