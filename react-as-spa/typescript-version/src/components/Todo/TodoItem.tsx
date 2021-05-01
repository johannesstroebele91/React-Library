import Todo from "../../models/types";

interface TodoProps {
    todo: Todo
}
const TodoItem: React.FC<TodoProps> = ({ todo }) => {
    return (
        <li key={todo.id}>
            {todo.text}
        </li>
    )
}

export default TodoItem;