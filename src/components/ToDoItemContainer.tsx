import { ToDoListContainerProps } from "../types"
import { useParams } from 'react-router-dom';
import ToDoItem from "./ToDoItem";
import useFilteredToDos from "../hooks/useFilteredToDos";
import { useMutation, useQueryClient } from 'react-query';
import { updateTodoCompleted, createToDo } from '../services/api';
import CreateToDo from "./CreateToDo";



export default function TodoItemContainer({ todos }: ToDoListContainerProps) {

    const { todoId } = useParams<{ todoId: string }>();
    const queryClient = useQueryClient();

    const filteredTodos = useFilteredToDos(todos, todoId ?? "");



    const mutationCompleted = useMutation(updateTodoCompleted, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });

    const handleToggleCompleted = (todoListId: string, todoId: string, completed: boolean) => {
        mutationCompleted.mutate({ todoListId, todoId, completed });
    };



    const mutationCreateToDo = useMutation(createToDo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });

    const handleCreateToDo = (todoListId: string, title: string, description: string, deadline: Date) => {
        mutationCreateToDo.mutate({ todoListId, title, description, deadline });
    }



    return (
        <div className="flex flex-row space-x-4">
            <div className="w-1/2">
                {filteredTodos.map(item => (
                    <ToDoItem key={item.id} item={item} onToggleCompleted={handleToggleCompleted} />
                ))}
            </div>
            <div className="w-1/2">
                <CreateToDo handleCreateToDo={handleCreateToDo} ToDoListId={todoId ?? ""} />
            </div>
        </div>
    );

}
