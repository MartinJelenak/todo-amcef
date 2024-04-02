import { useQuery } from 'react-query';
import { fetchToDoLists } from '../services/api'; // Predpokladajme, že cesta je správna
import Dashboard from './Dashboard';

export default function DashboardContainer() {
    const { isLoading, error, data } = useQuery('todos', fetchToDoLists);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return <Dashboard todos={data} />;
}