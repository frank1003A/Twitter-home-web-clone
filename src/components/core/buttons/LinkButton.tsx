import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}
const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <a href={href} className="link-btn">
      {children}
    </a>
  );
};

export default LinkButton;
