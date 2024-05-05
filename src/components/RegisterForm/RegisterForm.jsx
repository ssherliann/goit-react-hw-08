import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations'; 

export default function RegisterForm() {
    const dispatch = useDispatch();

    // function handleSubmit(values, { resetForm }){
    //     dispatch(
    //         register({
    //         name: values.name,
    //         email: values.email,
    //         password: values.password,
    //         })
    //     );
        
    //     resetForm();
    // }

        const handleSubmit = async (values, { resetForm }) => {
        try {
            dispatch(register(values));
            resetForm();
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
            <label htmlFor="name">
                Name
                <Field type="text" id="name" name="name" />
            </label>
            <label htmlFor="email">
                Email
                <Field type="email" id="email" name="email" />
            </label>
            <label htmlFor="password">
                Password
                <Field type="password" id="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </Form>
        </Formik>
    );
}
