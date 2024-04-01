import { ToDoItemType } from '../types'
import { useState } from 'react';


interface ToDoItemProps {
    item: ToDoItemType;
}

export default function ToDoItem({ item }: ToDoItemProps) {
    const [completed, setCompleted] = useState(item.completed);

    const { id, title, description, deadline } = item;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompleted(event.target.checked);
        console.log("Úkol je nyní: ", event.target.checked);
    };



    return (
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
                            onChange={handleChange}

                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <div>
                            <p>{deadline.toString()}</p>
                            <label htmlFor="comments" className="font-medium text-gray-400">
                                {title}
                            </label>
                        </div>
                        <p id="comments-description" className="text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </fieldset>

    )
}
