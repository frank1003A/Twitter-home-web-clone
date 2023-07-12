import { ReactNode } from "react";

interface MenuProps {
  ref?: React.LegacyRef<HTMLDivElement>;
  children: ReactNode;
}

const Menu = ({ children, ref }: MenuProps) => {
  return (
    <div className="primary-menu" role="menu" ref={ref}>
      {children}
    </div>
  );
};

export default Menu;
