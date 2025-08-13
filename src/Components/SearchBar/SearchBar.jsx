import { useState } from 'react';
import styles from './SearchBar.module.css';

/*
    SearchBar Component
    This component is used to get user input for search queries.
*/
function SearchBar() {
    const [userSearch, setUserSearch] = useState('');

    function handleSearchChange(event) {
        setUserSearch(event.target.value);
    }

    // Function to prevent auto reload on form submission
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Search submitted: ', userSearch);
        setUserSearch('');
    }
    return (
        <form  onSubmit={handleSubmit} className={styles.searchBar}>
            <input type='search' name='search' placeholder='Search..' onChange={handleSearchChange} value={userSearch}  aria-label='Search for songs' className={styles.input}/>
            <button type='submit' className={styles.button}>Search</button>
        </form>
    );
}

export default SearchBar;