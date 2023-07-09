interface MenuProps extends React.ComponentPropsWithoutRef<"div"> {
  // Define Additional Props Here
}

const Menu = ({ children }: MenuProps) => {
  return (
    <div className="primary-menu" role="menu">
      {children}
    </div>
  );
};

export default Menu;
