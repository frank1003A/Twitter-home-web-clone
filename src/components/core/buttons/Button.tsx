import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
};

export default Button;
