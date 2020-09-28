import React, { useState, useEffect } from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import Recipe from '../../components/Recipe/Recipe';
import styles from './Search.module.css';

const Search = () => {
    const API_KEY = 'fd7634aaee9240b7916fc0eefc0d7065';

    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('pasta');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=400`
        );
        const data = await response.json();
        setRecipes(data.results);
    };

    const updateInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    };

    const getInput = (e) => {
        e.preventDefault();
        setQuery(input);
        setInput('');
    };

    return (
        <>
            <SearchForm getInput={getInput} updateInput={updateInput} input={input} />
            <div className={styles.recipes}>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} img={recipe.image} title={recipe.title} />
                ))}
            </div>
        </>
    );
};

export default Search;
