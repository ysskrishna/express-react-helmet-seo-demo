import { useEffect, useState } from 'react';
import type { RecipePreview } from '../types/recipe';
import { getFeaturedRecipes, getPopularRecipes } from '../api/recipes';
import { RecipeGrid } from '../components/RecipeGrid';

export function Home() {
  const [featuredRecipes, setFeaturedRecipes] = useState<RecipePreview[]>([]);
  const [popularRecipes, setPopularRecipes] = useState<RecipePreview[]>([]);

  useEffect(() => {
    getFeaturedRecipes()
      .then(setFeaturedRecipes)
      .catch(error => {
        console.error('Error fetching featured recipes:', error);
        setFeaturedRecipes([]);
      });

    getPopularRecipes()
      .then(setPopularRecipes)
      .catch(error => {
        console.error('Error fetching popular recipes:', error);
        setPopularRecipes([]);
      });
  }, []);

  return (
    <div className="space-y-8">
      <RecipeGrid recipes={featuredRecipes} title="Featured Recipes" />
      <RecipeGrid recipes={popularRecipes} title="Popular Recipes" />
    </div>
  );
}