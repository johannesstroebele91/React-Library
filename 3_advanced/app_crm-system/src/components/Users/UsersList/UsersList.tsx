import User from "../../../models/types";
import Card from "../../UI/Card/Card";
import UserItem from "../UserItem.tsx/UserItem";
interface UsersListProps {
  users: User[];
}
const UsersList: React.FC<UsersListProps> = ({users}) => {
  return (
    <Card>
      <ul>
      {users.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
    </Card>
  );
};
export default UsersList;
