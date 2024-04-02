// import { useFormik } from 'formik';
// import * as Yup from 'yup';

interface TextInputProps {
    setOpenNewList: React.Dispatch<React.SetStateAction<boolean>>;
}


// const formik = useFormik({
//     initialValues: {
//         name: ''
//     },
//     validationSchema: Yup.object({
//         name: Yup.string()
//             .required('Required')
//             .min(3, 'Must be at least 3 characters')
//             .max(20, 'Must be 20 characters or less')
//     }),
//     onSubmit: values => {
//         console.log(values);
//     },
// });

export default function NewList({ setOpenNewList }: TextInputProps) {
    return (
        // <form onSubmit={formik.handleSubmit} className=''>
        <>
            <div className=" mb-4 px-1 flex rounded-md bg-white/10 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <input
                    className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    id="name"
                    name="name"
                    type="text"
                    autoFocus
                // onChange={formik.handleChange}
                />
            </div >
            <div className=' flex gap-2'>
                <button
                    type="submit"
                    onClick={() => setOpenNewList(false)}

                    className="mt-4 w-full rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="mt-4 w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                </button>
            </div>
        </>
        // </form>
    )
}
