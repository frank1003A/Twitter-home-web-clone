//
import { ReactNode } from "react";
import upArrIcon from "../../assets/hamburger/arrow_down.svg";
interface AccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <div className="accordion">
      <div className="accordion-title">
        <span className="title">{title}</span>
        <img src={upArrIcon} alt="up-arrow" />
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
