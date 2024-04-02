import { ToDoListContainerProps } from "../types"
import { useParams } from 'react-router-dom';
import ToDoItem from "./ToDoItem";
import useFilteredToDos from "../hooks/useFilteredToDos";
import { Mutation, useMutation, useQueryClient } from 'react-query';
import { updateTodoCompleted, deleteToDo } from '../services/api';
import CreateToDoContainer from "./CreateToDoContainer";

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

    const mutationDeleteToDo = useMutation(deleteToDo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });

    const handleDeleteToDo = (todoListId: string, todoId: string) => {
        mutationDeleteToDo.mutate({ todoListId, todoId });
    }




    return (
        <div className="flex flex-row space-x-4">
            <div className="w-1/2">
                {filteredTodos.map(item => (
                    <ToDoItem key={item.id} item={item} onToggleCompleted={handleToggleCompleted} handleDeleteToDo={handleDeleteToDo} />
                ))}
            </div>
            <div className="w-1/2">
                <CreateToDoContainer />
            </div>
        </div>

    );

}
