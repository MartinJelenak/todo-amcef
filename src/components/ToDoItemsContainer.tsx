import { ToDoListContainerProps } from "../types"
import { useParams } from 'react-router-dom';
import ToDoItem from "./ToDoItem";

export default function ToDoItems({ todos }: ToDoListContainerProps) {
    let { todoId } = useParams();
    let item = todos.find(todo => todo.id === todoId,);


    console.log(item)

    return (
        <>
            {
                item?.todos.map(item => <ToDoItem item={item} />)
            }
            <input type="text"
                className="rounded-lg bg-slate-400" />
        </>
    )
}
