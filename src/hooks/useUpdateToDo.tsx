import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../api/todoService';

export function useUpdateTodo() {
    const queryClient = useQueryClient();

    return useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });
}
