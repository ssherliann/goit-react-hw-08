import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations'; 
import styles from './RegisterForm.module.css'

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
        toast.success('Registration success', { duration: 4000, position: 'top-center'})
        } catch (error) {
        console.log('registration error:', error);
        toast.error('Registration error', { duration: 4000, position: 'top-center'})
        }

        resetForm();
    };

    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
            <Form className={styles.registerForm}>
                <label htmlFor="name" className={styles.label}>
                    Name
                    <Field type="text" id="name" name="name" className={styles.field}/>
                </label>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <Field type="email" id="email" name="email" className={styles.field}/>
                </label>
                <label htmlFor="password" className={styles.label}>
                    Password
                    <Field type="password" id="password" name="password" className={styles.field}/>
                </label>
                <button type="submit" className={styles.buttonSubmit}>Register</button>
            </Form>
        </Formik>
    );
}
