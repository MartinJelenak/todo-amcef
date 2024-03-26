import { ToDoListContainerProps } from '../types';



const ToDoList = ({ todos }: ToDoListContainerProps) => {
    console.log(todos)
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h3 className="text-3xl font-bold underline">{todo.name}</h3>
                    <ul>
                        {todo.todos.map((item) => (
                            <li key={item.id}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.completed ? 'Completed' : 'Not completed'}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;

