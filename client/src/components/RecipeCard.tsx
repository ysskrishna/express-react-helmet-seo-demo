import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon, FireIcon } from '@heroicons/react/24/outline';
import type { RecipePreview } from '../types/recipe';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: RecipePreview;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative w-full pt-[75%]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition line-clamp-1">
          {recipe.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm font-medium text-gray-700">{recipe.rating}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <ClockIcon className="h-5 w-5 mr-1" />
              <span>{recipe.cook_time}</span>
            </div>
          </div>
          <div className="flex items-center text-indigo-600">
            <FireIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}