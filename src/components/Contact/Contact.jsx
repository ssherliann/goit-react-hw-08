import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <p>Name: {name}</p>
                <p>Tel: {number}</p>
            </div>
            <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
        </div>
    );
}
