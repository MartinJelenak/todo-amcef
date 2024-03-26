export interface ToDoItem {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    completed: boolean;
}

export interface ToDoList {
    id: number;
    name: string;
    items: ToDoItem[];
}