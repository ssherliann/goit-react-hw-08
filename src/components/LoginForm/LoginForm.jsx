import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        try {
        dispatch(
            logIn({
            email: values.email,
            password: values.password,
            })
        );
        console.log('login success');
        } catch (error) {
        console.log('login error:', error);
        }

        resetForm();
    };

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label htmlFor="email">
                    Email
                    <Field type="email" id="email" name="email" />
                </label>
                <label  htmlFor="password">
                    Password
                    <Field type="password" id="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
};
