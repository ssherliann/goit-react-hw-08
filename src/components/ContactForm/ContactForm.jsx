import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations'
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Required")
});

const initialValues = {
    name: "",
    number: ""
};

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact({ name: values.name, number: values.number })); 
        resetForm();
    };

    const notify = () => toast.success('Adding number success');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.contactFormContainer}>
                <div className={styles.contactFormInput}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <Field type="text" name="name" className={styles.field}/>
                    <ErrorMessage name="name" component="span" className={styles.error} />
                </div>
                <div className={styles.contactFormInput}>
                    <label htmlFor="number" className={styles.label}>Number</label>
                    <Field type="tel" name="number" className={styles.field}/>
                    <ErrorMessage name="number" component="span" className={styles.error} />
                </div>
                <div>
                    <button type="submit" className={styles.btnAddcontact} onSubmit={notify}>Add contact</button>
                    <Toaster position="top-center" reverseOrder={false}/>
                </div>
            </Form>
        </Formik>
    );
}


