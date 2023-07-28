import React from "react";

interface ModalHeaderProps extends React.ComponentPropsWithoutRef<"div"> {}

const ModalHeader = ({ children, className, ...rest }: ModalHeaderProps) => {
  return (
    <div className="modal-top" {...rest}>
      {children}
    </div>
  );
};

export default ModalHeader;
