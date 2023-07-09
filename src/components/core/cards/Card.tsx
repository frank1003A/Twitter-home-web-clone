import React from "react";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  headerText: string;
}

const Card = ({ children, headerText }: CardProps) => {
  return (
    <div className="primary-card">
      <h1>{headerText}</h1>
      {children}
    </div>
  );
};

export default Card;
