import * as yup from 'yup';

export const createToDoValidationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    deadline: yup.date().required('Deadline is required').nullable(),
});
