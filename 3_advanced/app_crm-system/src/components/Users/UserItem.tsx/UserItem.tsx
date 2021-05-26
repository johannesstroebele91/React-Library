import User from "../../../models/types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      <b>{user.username}</b>: {user.age}
    </li>
  );
};

export default UserItem;
