import { ToDoListType } from '../types';

const useFilteredToDos = (todos: ToDoListType[], todoId: string) => {
    const filteredTodos = todos.find(list => list.id === todoId)?.todos || [];
    return filteredTodos;
}

export default useFilteredToDos;