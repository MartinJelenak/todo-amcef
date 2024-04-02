import { ToDoListContainerProps } from "../types"
import { useParams } from 'react-router-dom';
import ToDoItem from "./ToDoItem";
import useFilteredToDos from "../hooks/useFilteredToDos";
import { useMutation, useQueryClient } from 'react-query';
import { updateTodoCompleted, deleteToDo } from '../services/api';
import CreateToDoContainer from "./CreateToDoContainer";
import FilterContainer from "./FilterContainer";
import { useState } from "react";

export enum TodoFilter {
    All = "all",
    Active = "active",
    Completed = "completed"
}

export default function TodoItemContainer({ todos }: ToDoListContainerProps) {
    const [filter, setFilter] = useState<TodoFilter>(TodoFilter.All);
    const [searchText, setSearchText] = useState<string>("");

    const { todoId } = useParams<{ todoId: string }>();
    const queryClient = useQueryClient();

    const itemsFromList = useFilteredToDos(todos, todoId ?? "");

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

    const currentTodos = itemsFromList.filter(todo => {
        const statusMatch = filter === TodoFilter.All ||
            (filter === TodoFilter.Active && !todo.completed) ||
            (filter === TodoFilter.Completed && todo.completed);

        const searchTextMatch = todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
            todo.description.toLowerCase().includes(searchText.toLowerCase());

        return statusMatch && searchTextMatch;
    });


    return (
        <div className="flex flex-row space-x-4">
            <div className="w-1/2 2xl:w-2/3">
                {currentTodos.map(item => (
                    <ToDoItem key={item.id} item={item} onToggleCompleted={handleToggleCompleted} handleDeleteToDo={handleDeleteToDo} />
                ))}
            </div>
            <div className="w-1/2 2xl:w-1/3">
                <FilterContainer setFilter={setFilter} setSearchText={setSearchText} />
                <CreateToDoContainer />
            </div>
        </div>

    );

}
