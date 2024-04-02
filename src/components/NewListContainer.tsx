import React from 'react'
import NewList from './NewList'
import { createToDoList } from '../services/api'
import { useMutation, useQueryClient } from 'react-query';

interface NewListContainerProps {
    setOpenNewList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewListContainer({ setOpenNewList }: NewListContainerProps) {
    const queryClient = useQueryClient();

    const createToDoListMutation = useMutation(createToDoList, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
    });

    const handleCreateToDoList = (name: string) => {
        createToDoListMutation.mutate({ name });
    }

    return (
        <NewList setOpenNewList={setOpenNewList} handleCreateToDoList={handleCreateToDoList} />
    )
}
