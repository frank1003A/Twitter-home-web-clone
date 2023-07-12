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
import wtl from "../assets/svg/white-twitter-logo.svg";

import Avatar from "../core/Avatar/Avatar";
import Button from "../core/buttons/Button";
import UserCard from "../core/cards/UserCard";

// Image
import avatar_image from "../assets/jpg/avatar.jpg";
import flower from "../assets/svg/flower.svg";
import Column from "../core/lists/Column";

const Header = () => {
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
    { title: "More", icon: mIcon },
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
          className="btn primary"
          id="btn_desk"
          disabled
          style={{ marginTop: 5, minHeight: 50 }}
        >
          Tweet
        </Button>

        {/** mobile tweet button */}
        <Button className="btn primary" id="btn_mob" disabled>
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
    </header>
  );
};

export default Header;
