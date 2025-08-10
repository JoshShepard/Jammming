import { useState } from 'react';
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
        <form  onSubmit={handleSubmit}>
            <input type='search' name='search' placeholder='Search..' onChange={handleSearchChange} value={userSearch}  aria-label='Search for songs'/>
            <button type='submit'>Search</button>
        </form>

        
    );
}

export default SearchBar;