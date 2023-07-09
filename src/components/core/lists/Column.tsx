import { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  className?: string;
}

const Column = ({ className, children }: ColumnProps) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {children}
    </div>
  );
};

export default Column;
