import { useEffect, useState } from 'react';
import type { RecipePreview } from '../types/recipe';
import { getAllRecipes } from '../api/recipes';
import { RecipeGrid } from '../components/RecipeGrid';

export function Recipes() {
  const [recipes, setRecipes] = useState<RecipePreview[]>([]);

  useEffect(() => {
    getAllRecipes()
      .then(setRecipes)
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setRecipes([]);
      });
  }, []);

  return <RecipeGrid recipes={recipes} title="All Recipes" />;
}