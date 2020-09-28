import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className={styles.pagination}>
            {pageNumbers.map((number) => (
                <li
                    key={number}
                    className={currentPage === number ? styles.activePaginationItem : styles.paginationItem}
                >
                    <a onClick={() => paginate(number)} href="#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
