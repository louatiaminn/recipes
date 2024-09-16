import React, { useEffect, useState } from 'react';
import OneRecipes from './OneRecipes';
import axios from 'axios';

function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/data.json')
          .then((res) => {
            setRecipes(res.data);
          })
          .catch((error) => {
            console.error(error, "Error fetching data from API");
          });
    }, []);

    console.log(recipes, "Those are the recipes");

    return (
        <div className='d-flex flex-wrap gap-4 justify-content-center p-3'>
            {recipes.map((element, index) => (
                <OneRecipes key={index} element={element} />
            ))}
        </div>
    );
}

export default AllRecipes;
