interface TopBarProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
}

const TopBar = ({ children, title, ...rest }: TopBarProps) => {
  return (
    <div className="top-bar" {...rest}>
      <div className="title-wrapper">
        <h1 className="title">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default TopBar;
