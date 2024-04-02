import { ToDoItemType } from '../types'
import { TrashIcon } from "@heroicons/react/24/outline";




interface ToDoItemProps {
    item: ToDoItemType;
    onToggleCompleted: (todoListId: string, todoId: string, completed: boolean) => void;
    handleDeleteToDo: (todoListId: string, todoId: string) => void;
}


export default function ToDoItem({ item, onToggleCompleted, handleDeleteToDo }: ToDoItemProps) {
    const { id, title, description, deadline, completed, todolistId } = item;

    const deadlineDate = new Date(deadline);
    const formattedDate = deadlineDate.toLocaleDateString('cs-CZ'); // Změňte 'cs-CZ' na váš preferovaný lokalizační kód
    const formattedTime = deadlineDate.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });


    const handleChangeCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompleted(todolistId, id, event.target.checked);
    };

    const handleDelete = () => {
        handleDeleteToDo(todolistId, id);
    }



    return (
        <div className=' bg-white bg-opacity-10 rounded-xl p-4 mb-2 shadow-lg'>

            <fieldset>
                <legend className="sr-only">Notifications</legend>
                <div className="space-y-5 ">
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <style>
                                {`
                            .custom-checkbox {
                                /* Přidejte styly pro šedé pozadí a okraj */
                                background-color: #132938; /* šedá barva pozadí (např. gray-100 z Tailwind) */
                                border-color: #4F4F4F; /* šedý okraj (např. gray-300 z Tailwind) */
                              }
                              
                              /* Styly pro zaškrtnutý stav */
                              .custom-checkbox:checked {
                                /* Modré pozadí a okraj pro zaškrtnutý stav */
                                background-color: #2563eb; /* modrá (blue-600) */
                                border-color: #1d4ed8; /* tmavě modrá (blue-700) */
                              }
                        `}
                            </style>
                            <input
                                id={`todo-item-${id}`}
                                aria-describedby={`todo-item-desc-${id}`}
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded custom-checkbox "
                                checked={completed}
                                onChange={handleChangeCompleted}
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6 w-full">
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor="comments" className="font-medium text-gray-300">
                                        {title}, {id}, {todolistId}
                                    </label>
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md text-gray-400 "
                                        onClick={handleDelete}>
                                        <span className="sr-only">Close</span>
                                        <TrashIcon className="h-5 w-5 text-gray-500 hover:text-gray-800 focus:text-gray-200" />
                                    </button>

                                </div>
                            </div>
                            <p id="comments-description" className="text-gray-400">
                                {description}
                            </p>
                            <div className='flex justify-end gap-3'>
                                <p className="text-gray-500">{formattedDate}</p>
                                <p className="text-gray-500">{formattedTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset >
        </div >

    )
}
