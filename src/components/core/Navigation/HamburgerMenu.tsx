//
import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import blIcon from "../../assets/hamburger/blue.svg";
import bIcon from "../../assets/hamburger/bookmark.svg";
import cIcon from "../../assets/hamburger/close.svg";
import lIcon from "../../assets/hamburger/list.svg";
import plus from "../../assets/hamburger/plus.svg";
import pIcon from "../../assets/hamburger/profile.svg";
import imgUser from "../../assets/jpg/avatar.jpg";
import Accordion from "../Accordion/Accordion";

//
import Avatar from "../Avatar/Avatar";
import IconButton from "../buttons/IconButton";
import LinkButton from "../buttons/LinkButton";
import Overlay from "./Overlay";

interface HamburgerMenuProps {
  toggle: boolean;
  onClose: () => void;
}
const HamburgerMenu = ({ toggle, onClose }: HamburgerMenuProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let activeBg = "#1da1f2";
  let inActiveBg = theme === "dark" ? "#ffffff" : "#555";

  const links: {
    title: string;
    icon: string;
    badge?: number;
    updateBadge?: boolean;
  }[] = [
    { title: "Profile", icon: pIcon },
    { title: "Twitter Blue", icon: blIcon },
    { title: "Lists", icon: lIcon },
    { title: "Bookmarks", icon: bIcon },
  ];

  const navLinks = links.map((link) => {
    return (
      <LinkButton href={`/${link.title}`} key={`${link.title}_btn`}>
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
    <>
      <Overlay toggle={toggle} onClose={onClose}></Overlay>
      <div
        className="hamburger-menu"
        role="dialog"
        style={{
          transform: toggle ? "translateX(0%)" : "translateX(-100%)",
          boxShadow: toggle ? "none" : "initial",
        }}
      >
        <div className="top">
          <h2>Account info</h2>
          <IconButton
            style={{
              padding: 5,
              width: 30,
              height: 30,
            }}
            onClick={onClose}
          >
            <img src={cIcon} alt="close_icon" />
          </IconButton>
        </div>
        <div className="main-content">
          <div className="user">
            <div className="ava_btn">
              <Avatar src={imgUser} />
              <IconButton
                style={{
                  border: "1px solid #38444d",
                  padding: 5,
                  width: 30,
                  height: 30,
                }}
              >
                <img src={plus} alt="plus_icon" />
              </IconButton>
            </div>
            <div className="names">
              <span className="name">Frank Ezene</span>
              <span className="user-name">@frankezene</span>
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
          <div className="navigation" role="navigation">
            <nav>{navLinks}</nav>
          </div>
          <div className="divider" role="separator"></div>
          <Accordion title="Creator Studio">{}</Accordion>
          <Accordion title="Professional Tools">{}</Accordion>
          <Accordion title="Settings and Support">{}</Accordion>
          <div
            style={{
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
          </div>
          <div style={{ height: 40 }}></div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
