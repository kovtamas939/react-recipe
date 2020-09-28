import React, { useState, useEffect } from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import Recipe from '../../components/Recipe/Recipe';
import Spinner from '../../components/Spinner/Spinner';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Search.module.css';

const Search = () => {
    const API_KEY = 'fd7634aaee9240b7916fc0eefc0d7065';

    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(10);

    useEffect(() => {
        if (query !== '') {
            getRecipes();
        }
    }, [query]);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const getRecipes = async () => {
        setLoading(true);
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=83`
        );
        const data = await response.json();
        setLoading(false);
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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <SearchForm getInput={getInput} updateInput={updateInput} input={input} />
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className={styles.recipes}>
                        {currentRecipes.map((recipe) => (
                            <Recipe key={recipe.id} img={recipe.image} title={recipe.title} />
                        ))}
                    </div>
                    <Pagination
                        recipesPerPage={recipesPerPage}
                        totalRecipes={recipes.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </>
            )}
        </>
    );
};

export default Search;
