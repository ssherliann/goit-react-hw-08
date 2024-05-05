import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations'; 

export default function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        try {
        dispatch(
            register({
            name: values.name,
            email: values.email,
            password: values.password,
            })
        );
        console.log('registration success');
        } catch (error) {
        console.log('registration error:', error);
        }

        resetForm();
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
