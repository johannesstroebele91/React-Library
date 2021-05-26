import User from "../../../models/types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      <b>{user.username}</b>: {user.age} years old
    </li>
  );
};

export default UserItem;
