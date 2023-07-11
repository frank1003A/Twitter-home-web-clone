import React from "react";

interface AbsoluteCenterProps extends React.ComponentPropsWithoutRef<"div"> {}

const AbsoluteCenter = ({ children, ...rest }: AbsoluteCenterProps) => {
  return (
    <div className="absolute-center" {...rest}>
      {children}
    </div>
  );
};

export default AbsoluteCenter;
