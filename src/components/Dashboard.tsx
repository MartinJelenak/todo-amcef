import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import ToDoListContainer from './ToDoListContainer'
import TodoItemContainer from './ToDoItemContainer'
import { ToDoListContainerProps } from '../types'
import { Routes, Route } from 'react-router-dom';
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import NewListContainer from './NewListContainer'

export default function Dashboard({ todos }: ToDoListContainerProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [openNewList, setOpenNewList] = useState(false)
    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                                        <p>Martin Jelenak</p>
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <ul role="list" className="-mx-2 space-y-1">
                                                <ToDoListContainer />
                                            </ul>
                                            <li className="-mx-6 mt-auto p-4">
                                                {
                                                    openNewList
                                                        ?
                                                        <NewListContainer setOpenNewList={setOpenNewList} />
                                                        :
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setOpenNewList(true)
                                                            }}
                                                            className="flex w-full items-center gap-x-4 px-6 py-3 text-lg font-semibold leading-6 text-whit bg-blue-500 text-white rounded-md justify-center"
                                                        >
                                                            <span>New list</span>
                                                        </button>
                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog >
            </Transition.Root >

            {/* Static sidebar for desktop */}
            < div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" >
                {/* Sidebar component, swap this element with another sidebar if you like */}
                < div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6" >
                    <div className="flex h-16 shrink-0 items-center gap-4">
                        <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                        <p>Todo list, Martin Jelenak</p>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    <ToDoListContainer />
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto p-4">
                                {
                                    openNewList
                                        ?
                                        <NewListContainer setOpenNewList={setOpenNewList} />
                                        :
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setOpenNewList(true)
                                            }}
                                            className="flex w-full items-center gap-x-4 px-6 py-3 text-lg font-semibold leading-6 text-whit bg-blue-500 text-white rounded-md justify-center"
                                        >
                                            <span>New list</span>
                                        </button>
                                }
                            </li>
                        </ul>
                    </nav>
                </div >
            </div >

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
                <a href="#">
                    <span className="sr-only">Your profile</span>
                    <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                </a>
                <p>Todo list, Martin Jelenak</p>
            </div>

            <main className="py-10 lg:pl-72 bg-cove ">
                <div className="px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/list/:todoId" element={<TodoItemContainer todos={todos} />} />
                    </Routes>
                </div>
            </main>
        </>
    )
}
