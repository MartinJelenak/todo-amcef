import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'

interface SearchBarProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setSearchText }: SearchBarProps) {
    return (
        <div className={twMerge('sticky top-[90px] lg:top-[39px] bg-white bg-opacity-10 rounded-xl p-4 shadow-lg flex justify-between items-center gap-2 mb-2')}>
            <form className="flex items-center w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        id="voice-search"
                        className="bg-white/10 ring-white/10 rounded-md ring-1 ring-inset text-sm focus:ring-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Search todos"
                        onChange={(e) => {
                            setTimeout(() => {
                                setSearchText(e.target.value)
                            }
                                , 700)
                        }}
                        required />
                </div>
                <button type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="mr-2 -ml-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                    Search
                </button>
            </form>
        </div >


    )
}
