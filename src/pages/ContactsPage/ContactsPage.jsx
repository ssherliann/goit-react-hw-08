import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors'
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
        
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <>
        <ContactForm/>
        <div>{isLoading && 'Request in progress...'}</div>
        <SearchBox/>
        <ContactList/>
        </>
    )
}