import React from 'react';
import styles from './Recipe.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({ id, img, title }) => {
    return (
        <Link to={`recipe/${id}`}>
            <div className={styles.recipe}>
                <img src={img} alt="" />
                <h3>{title}</h3>
            </div>
        </Link>
    );
};

export default Recipe;
