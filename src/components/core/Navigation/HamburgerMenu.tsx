//
import blIcon from "../../assets/hamburger/blue.svg";
import bIcon from "../../assets/hamburger/bookmark.svg";
import cIcon from "../../assets/hamburger/close.svg";
import lIcon from "../../assets/hamburger/list.svg";
import plus from "../../assets/hamburger/plus.svg";
import pIcon from "../../assets/hamburger/profile.svg";
import Accordion from "../Accordion/Accordion";

//
import Avatar from "../Avatar/Avatar";
import IconButton from "../buttons/IconButton";
import LinkButton from "../buttons/LinkButton";

interface HamburgerMenuProps {
  toggle: boolean;
  onClose: () => void;
}
const HamburgerMenu = ({ toggle, onClose }: HamburgerMenuProps) => {
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

  const navLinks = links.map((link, index) => {
    return (
      <LinkButton href={`/${link.title}`} key={index}>
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
      {toggle && (
        <div className="ham-overlay" role="presentation">
          <div
            className="hamburger-menu"
            role="dialog"
            style={{
              transform: toggle ? "translateX(0%)" : "translateX(-100%)",
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
                  <Avatar />
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
              <div className="divider"></div>
              <Accordion title="Creator Studio">{}</Accordion>
              <Accordion title="Professional Tools">{}</Accordion>
              <Accordion title="Settings and Support">{}</Accordion>
              <div style={{ height: 40 }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
