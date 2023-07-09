interface UserCardProps extends React.ComponentPropsWithoutRef<"div"> {}

const UserCard = ({ children }: UserCardProps) => {
  return <div className="user-card">{children}</div>;
};

export default UserCard;
