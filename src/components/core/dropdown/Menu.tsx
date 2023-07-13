import { forwardRef } from "react";

interface MenuProps extends React.ComponentPropsWithRef<"div"> {}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, ...rest }, ref) => {
    return (
      <div className="primary-menu" role="menu" ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

export default Menu;
