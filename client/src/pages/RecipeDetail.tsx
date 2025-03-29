import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon } from '@heroicons/react/24/outline';
import type { Recipe } from '../types/recipe';
import { getRecipeBySlug } from '../api/recipes';
import { SEO } from '../components/SEO';

export function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (slug) {
      getRecipeBySlug(slug).then(setRecipe);
    }
  }, [slug]);

  if (!recipe) {
    return (
      <>
        <SEO title="Loading Recipe..." />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SEO
        title={recipe.title}
        description={`Learn how to make ${recipe.title} with our step-by-step recipe guide.`}
        ogImage={recipe.image}
        twitterImage={recipe.image}
        ogType="article"
        canonicalUrl={`${window.location.origin}/recipe/${slug}`}
      />
      <div className="mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1">{recipe.rating}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5" />
            <span className="ml-1">Prep: {recipe.prep_time}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5" />
            <span className="ml-1">Cook: {recipe.cook_time}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {ingredient}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Nutrition</h2>
            <div className="space-y-2">
              <p>Calories: {recipe.nutrition.calories}</p>
              <p>Protein: {recipe.nutrition.protein}</p>
              <p>Carbs: {recipe.nutrition.carbs}</p>
              <p>Fat: {recipe.nutrition.fat}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <span className="font-bold mr-4">{index + 1}.</span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}