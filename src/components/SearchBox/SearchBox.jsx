import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors'
import styles from "./SearchBox.module.css";

export default function SearchBox() {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectNameFilter);

    const handleChange = (event) => {
        dispatch(changeFilter({ inputValue: event.target.value }));
    };

    return (
        <div className={styles.searchForm}>
            <label>Find contacts by name</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
}



