import { useQuery } from 'react-query';
import { fetchToDoLists } from '../services/api';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DashboardContainer() {
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery('todos', fetchToDoLists);

    // Akonáhle sú dáta načítané a existuje aspoň jeden zoznam, presmerujeme na prvý zoznam
    useEffect(() => {
        if (!isLoading && data && data.length > 0) {
            navigate(`/list/${data[0].id}`);
        }
    }, [data, isLoading, navigate]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return <Dashboard todos={data} />;
}
