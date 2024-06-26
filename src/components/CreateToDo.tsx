import { useFormik } from 'formik';
import { createToDoValidationSchema } from '../schemas/CreateToDoValidationSchema';

interface TextInputProps {
    handleCreateToDo: (todoListId: string, title: string, description: string, deadline: Date) => void;
    ToDoListId: string;
}

export default function CreateToDo({ handleCreateToDo, ToDoListId }: TextInputProps) {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            deadline: new Date().toISOString()
        },
        validationSchema: createToDoValidationSchema,
        onSubmit: values => {
            handleCreateToDo(ToDoListId, values.title, values.description, new Date(values.deadline));
        },
    });

    return (
        <>
            <div className=' sticky top-[104px] lg:top-[193px] bg-white bg-opacity-10 rounded-xl p-4 shadow-lg mb-2'>

                <form onSubmit={formik.handleSubmit} className=''>
                    <label htmlFor="title">Title</label>
                    <div className=" mb-4 px-1 flex rounded-md bg-white/10 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <input
                            className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div >
                    <label htmlFor="description">Description</label>
                    <div className=" mb-4 px-1 flex rounded-md bg-white/10 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <input
                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </div>
                    <label
                        htmlFor="deadline">
                        Deadline
                    </label>
                    <div className=" mb-4 px-1 flex rounded-md bg-white/10 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <input
                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                            id="dedline"
                            name="dedline"
                            type="dateTime-local"
                            onChange={e => formik.setFieldValue('deadline', e.target.value)}
                            value={formik.values.deadline.substring(0, 16)}
                        />
                    </div>
                    <div className=' flex justify-end'>
                        <button
                            type="submit"
                            className="mt-4 rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}
