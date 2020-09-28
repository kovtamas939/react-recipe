import React from 'react';

import styles from './SearchForm.module.css';

const SearchForm = ({ getInput, updateInput, input }) => {
    return (
        <form onSubmit={getInput}>
            <input
                onChange={updateInput}
                className={styles.searchInput}
                type="text"
                placeholder="Find recipes..."
                value={input}
            />
            <button className={styles.searchButton} type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchForm;
