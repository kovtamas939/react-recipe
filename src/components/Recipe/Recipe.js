import React from 'react';
import styles from './Recipe.module.css';

const Recipe = ({ img, title }) => {
    return (
        <div className={styles.recipe}>
            <img src={img} alt="" />
            <h3>{title}</h3>
        </div>
    );
};

export default Recipe;
