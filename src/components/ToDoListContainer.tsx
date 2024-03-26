import { useQuery } from 'react-query';
import ToDoList from './ToDoList';


export default function ToDoListContainer() {
    const { isLoading, error, data } = useQuery('todos', () =>
        fetch('https://6602e5e39d7276a75554873a.mockapi.io/apiamcef/v1/todolists').then(res =>
            res.json()
        )
    );

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return <ToDoList todos={data} />;
}
