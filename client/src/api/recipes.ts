import axios from 'axios';
import type { Recipe, RecipePreview } from '../types/recipe';

// Mock data for recipes
const mockRecipes: Recipe[] = [
  {
    recipe_id: 1,
    title: "Spaghetti Carbonara",
    slug: "spaghetti-carbonara",
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prep_time: "10 min",
    cook_time: "20 min",
    rating: 4.8,
    ingredients: [
      "200g spaghetti",
      "2 large eggs",
      "100g pancetta",
      "50g parmesan cheese",
      "2 cloves garlic",
      "Salt and black pepper"
    ],
    instructions: [
      "Boil water and cook spaghetti according to package instructions.",
      "Fry pancetta with garlic until crispy.",
      "Whisk eggs and parmesan in a bowl.",
      "Drain pasta and mix with pancetta and egg mixture.",
      "Serve with additional parmesan and black pepper."
    ],
    nutrition: {
      calories: 450,
      protein: "25g",
      carbs: "50g",
      fat: "20g"
    },
    view_count: 504,
    created_at: "2024-03-10T12:00:00Z",
    updated_at: "2024-03-10T15:30:00Z"
  },
  {
    recipe_id: 2,
    title: "Classic Margherita Pizza",
    slug: "classic-margherita-pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prep_time: "20 min",
    cook_time: "15 min",
    rating: 4.9,
    ingredients: [
      "Pizza dough",
      "San Marzano tomatoes",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 450°F",
      "Roll out pizza dough",
      "Add tomato sauce",
      "Top with mozzarella",
      "Bake for 12-15 minutes",
      "Add fresh basil"
    ],
    nutrition: {
      calories: 300,
      protein: "12g",
      carbs: "40g",
      fat: "10g"
    },
    view_count: 302,
    created_at: "2024-03-09T10:00:00Z",
    updated_at: "2024-03-09T12:30:00Z"
  },
  {
    recipe_id: 3,
    title: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    prep_time: "15 min",
    cook_time: "12 min",
    rating: 4.7,
    ingredients: [
      "2 1/4 cups flour",
      "1 cup butter",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 eggs",
      "Chocolate chips"
    ],
    instructions: [
      "Cream butter and sugars",
      "Add eggs and vanilla",
      "Mix in dry ingredients",
      "Add chocolate chips",
      "Bake at 375°F for 10-12 minutes"
    ],
    nutrition: {
      calories: 150,
      protein: "2g",
      carbs: "25g",
      fat: "8g"
    },
    view_count: 428,
    created_at: "2024-03-08T14:00:00Z",
    updated_at: "2024-03-08T16:45:00Z"
  }
];

const api = axios.create({
  baseURL: '/api'
});

// Mock API calls
export const getPopularRecipes = () => 
  Promise.resolve(mockRecipes.map(recipe => ({
    recipe_id: recipe.recipe_id,
    title: recipe.title,
    slug: recipe.slug,
    image: recipe.image,
    prep_time: recipe.prep_time,
    cook_time: recipe.cook_time,
    rating: recipe.rating
  })));

export const getFeaturedRecipes = () => 
  Promise.resolve(mockRecipes.map(recipe => ({
    recipe_id: recipe.recipe_id,
    title: recipe.title,
    slug: recipe.slug,
    image: recipe.image,
    prep_time: recipe.prep_time,
    cook_time: recipe.cook_time,
    rating: recipe.rating
  })));

export const getAllRecipes = () => 
  Promise.resolve(mockRecipes.map(recipe => ({
    recipe_id: recipe.recipe_id,
    title: recipe.title,
    slug: recipe.slug,
    image: recipe.image,
    prep_time: recipe.prep_time,
    cook_time: recipe.cook_time,
    rating: recipe.rating
  })));

export const getRecipeBySlug = (slug: string) => 
  Promise.resolve(mockRecipes.find(recipe => recipe.slug === slug) || mockRecipes[0]);