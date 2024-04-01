import { useQuery } from 'react-query';
import axios from 'axios';
import Dashboard from './Dashboard';

export default function DashboardContainer() {
    const fetchTodos = async () => {
        const { data } = await axios.get('https://6602e5e39d7276a75554873a.mockapi.io/apiamcef/v1/todolists');
        return data;
    };

    const { isLoading, error, data } = useQuery('todos', fetchTodos);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return <Dashboard todos={data} />;
}
