import React from "react";

interface OverlayProps extends React.ComponentPropsWithoutRef<"div"> {
  toggle: boolean;
  onClose?: () => void;
}

const Overlay = ({ children, toggle, onClose }: OverlayProps) => {
  return (
    <div
      className="ham-overlay"
      role="presentation"
      style={{
        display: toggle ? "block" : "none",
      }}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Overlay;
