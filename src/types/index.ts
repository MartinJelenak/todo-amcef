export interface ToDoItemType {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    completed: boolean;
}

export interface ToDoListType {
    id: string;
    name: string;
    todos: ToDoItemType[];
}

export interface ToDoListContainerProps {
    todos: ToDoListType[];
}