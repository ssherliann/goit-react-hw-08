import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css'

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

    const notify = () => toast.success('Login success');

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            <Form autoComplete="off" className={styles.loginForm}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <Field type="email" id="email" name="email" className={styles.field}/>
                </label>
                <label  htmlFor="password" className={styles.label}>
                    Password
                    <Field type="password" id="password" name="password" className={styles.field}/>
                </label>
                <div>
                    <button type="submit" className={styles.buttonSubmit} onSubmit={notify}>Log In</button>
                    <Toaster position="top-center" reverseOrder={false}/>
                </div>
            </Form>
        </Formik>
    );
};
