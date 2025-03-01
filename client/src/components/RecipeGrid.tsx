import type { RecipePreview } from '../types/recipe';
import { RecipeCard } from './RecipeCard';

interface RecipeGridProps {
  recipes: RecipePreview[];
  title: string;
}

export function RecipeGrid({ recipes, title }: RecipeGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 bg-white rounded-xl shadow-sm">
            <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <p className="mt-4 text-lg font-medium text-gray-900">No recipes found</p>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}