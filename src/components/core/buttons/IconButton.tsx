interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const IconButton = ({ children, className, ...rest }: IconButtonProps) => {
  return (
    <button className={className ? className : "icon-btn"} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
