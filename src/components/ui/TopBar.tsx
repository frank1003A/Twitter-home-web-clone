import { useMediaQuery } from "../../hooks/useMediaQuery";
import imgUser from "../assets/jpg/avatar.jpg";
import Avatar from "../core/Avatar/Avatar";

import twLogo from "../assets/svg/xlogo.svg";

interface TopBarProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  toggleHamMenu?: () => void;
}

const TopBar = ({ children, title, toggleHamMenu, ...rest }: TopBarProps) => {
  const mediaQuery = useMediaQuery("xsm");
  return (
    <div className="top-bar" {...rest}>
      <div className="title-wrapper">
        {toggleHamMenu && mediaQuery && (
          <div
            className="xsm-bar"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "30%",
            }}
          >
            <div className="ham-button" onClick={toggleHamMenu}>
              <Avatar src={imgUser} />
            </div>
            <a href="/twitter/home" className="logo">
              <img
                src={twLogo}
                alt="logo"
                width={40}
                height={40}
                style={{
                  filter: "var(--filter)",
                }}
              />
            </a>
            <div></div>
          </div>
        )}
        {!mediaQuery && <h1 className="title">{title}</h1>}
      </div>
      {children}
    </div>
  );
};

export default TopBar;
