import { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  className?: string;
}

const Row = ({ children, className }: RowProps) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {children}
    </div>
  );
};

export default Row;
