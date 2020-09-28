import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './RecipePage.module.css';

const RecipePage = () => {
    const API_KEY = 'fd7634aaee9240b7916fc0eefc0d7065';

    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const id = window.location.href.split('/')[4];
        setLoading(true);
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        setLoading(false);
        setRecipe(data);
        console.log(data);
    };

    return <>{loading ? <Spinner /> : <div>{recipe.title}</div>}</>;
};

export default RecipePage;
