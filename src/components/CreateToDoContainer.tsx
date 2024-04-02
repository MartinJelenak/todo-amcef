import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { createToDo } from '../services/api';
import CreateToDo from "./CreateToDo";



export default function TodoItemContainer() {

    const { todoId } = useParams<{ todoId: string }>();
    const queryClient = useQueryClient();


    const mutationCreateToDo = useMutation(createToDo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });

    const handleCreateToDo = (todoListId: string, title: string, description: string, deadline: Date) => {
        mutationCreateToDo.mutate({ todoListId, title, description, deadline });
    }


    return (
        <CreateToDo handleCreateToDo={handleCreateToDo} ToDoListId={todoId ?? ""} />
    );

}
