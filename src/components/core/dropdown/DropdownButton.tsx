import { useState } from "react";
import dicon from "../../assets/svg/dropdown_icon.svg";

interface DropdownButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  icon?: string;
}

const DropdownButton = ({ title, icon, children }: DropdownButtonProps) => {
  const [menToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <div
      style={{ position: "relative" }}
      aria-expanded="false"
      aria-haspopup="menu"
      aria-label="More"
      tabIndex={0}
    >
      <button
        className={icon ? "dropdown-btn no-border" : "dropdown-btn"}
        onClick={() => setMenuToggle(!menToggle)}
      >
        <div>
          {icon && <img src={icon} alt="dropdown-icon" />}
          {title}
          {icon ? "" : <img src={dicon} alt="arrow_down" />}
        </div>
      </button>
      {menToggle && children}
    </div>
  );
};

export default DropdownButton;
