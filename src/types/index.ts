export interface ToDoItemType {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    completed: boolean;
}

export interface ToDoListType {
    id: number;
    name: string;
    todos: ToDoItemType[];
}

export interface ToDoListContainerProps {
    todos: ToDoListType[];
}