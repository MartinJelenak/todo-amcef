import { ToDoListContainerProps } from '../types';
import { Link } from 'react-router-dom';


const ToDoList = ({ todos }: ToDoListContainerProps) => {


    return (
        <>
            {todos.map((item) => (
                <Link key={item.name}
                    to={`/items/${item.id}`} >
                    <div
                        className='bg-gray-800 mt-1 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
                        {item.name}, {item.id}
                    </div>
                </Link >
            ))}
        </>
    );
};

export default ToDoList;