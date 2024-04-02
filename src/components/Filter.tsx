import { FunnelIcon } from "@heroicons/react/24/outline";
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { TodoFilter } from "../types";

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<TodoFilter>>
}

export default function Filter({ setFilter }: FilterProps) {
    const [filterStyle, setFilterStyle] = useState('all');

    function handleFilter(filter: TodoFilter) {
        setFilter(filter);
    }

    return (
        <>
            <div className={twMerge('sticky top-[104px] lg:top-[121px] bg-white bg-opacity-10 rounded-xl p-4 shadow-lg flex justify-between items-center gap-2 mb-2')}>
                <div className="w-32">
                    <FunnelIcon className="h-6 w-6 text-gray-500" />
                </div>
                <button
                    type="button"
                    className={twMerge("w-full rounded-l-lg bg-white/10  py-2 text-xs font-semibold text-white shadow-sm "
                        , filterStyle === 'all' ? 'bg-blue-500' : '')}
                    onClick={() => {
                        setFilterStyle('all')
                        handleFilter(TodoFilter.All)
                    }}
                >
                    All
                </button>
                <button
                    type="button"
                    className={twMerge("w-full  bg-white/10  py-2 text-xs font-semibold text-white shadow-sm "
                        , filterStyle === 'active' ? 'bg-blue-500' : '')}
                    onClick={() => {
                        setFilterStyle('active')
                        handleFilter(TodoFilter.Active)
                    }}
                >
                    Active
                </button>
                <button
                    type="button"
                    className={twMerge("w-full rounded-r-lg bg-white/10 py-2 text-xs font-semibold text-white shadow-sm "
                        , filterStyle === 'completed' ? 'bg-blue-500' : '')}
                    onClick={() => {
                        setFilterStyle('completed')
                        handleFilter(TodoFilter.Completed)
                    }}
                >
                    Completed
                </button>
            </div >
        </>
    )
}



