import React from "react";

interface SectionProps extends React.ComponentPropsWithoutRef<"div"> {}

const Section = ({ children, ...rest }: SectionProps) => {
  return <section {...rest}>{children}</section>;
};

export default Section;
