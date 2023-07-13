import { ThemeContext } from "context/ThemeContext";
import React, { useContext } from "react";

interface AbsoluteCenterProps extends React.ComponentPropsWithoutRef<"div"> {}

const AbsoluteCenter = ({ children, ...rest }: AbsoluteCenterProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="absolute-center"
      {...rest}
      style={{ backgroundColor: theme === "light" ? "#ffffff" : "#15202b" }}
    >
      {children}
    </div>
  );
};

export default AbsoluteCenter;
