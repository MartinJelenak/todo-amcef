import { useState, useEffect } from 'react';
import { ToDoListContainerProps } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const ToDoList = ({ todos }: ToDoListContainerProps) => {

    const [selected, setSelected] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!selected && todos && todos.length > 0) {
            setSelected(todos[0].id);
            navigate(`/list/${todos[0].id}`);
        }
    }, [todos, navigate, selected]);


    return (
        <>
            {todos.map((item) => (
                <Link key={item.id}
                    to={`/list/${item.id}`}
                    onClick={() => setSelected(`${item.id}`)}>
                    <div className={twMerge('bg-gray-800 mt-1 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold', item.id === selected ? 'bg-blue-500' : "")}>
                        {item.name}
                    </div>
                </Link >
            ))}
        </>
    );
};

export default ToDoList;
