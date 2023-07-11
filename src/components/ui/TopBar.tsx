import { useMediaQuery } from "../../hooks/useMediaQuery";
import Avatar from "../core/Avatar/Avatar";

import twLogo from "../assets/svg/blue-twitter-logo.svg";

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
              justifyContent: "space-between",
            }}
          >
            <div className="ham-button" onClick={toggleHamMenu}>
              <Avatar />
            </div>
            <a href="/twitter/home" className="logo">
              <img src={twLogo} alt="logo" width={40} height={40} />
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
