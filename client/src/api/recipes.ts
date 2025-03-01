import axios from 'axios';
import type { Recipe, RecipePreview } from '../types/recipe';

const api = axios.create({
  baseURL: '/api'
});

export const getPopularRecipes = async (): Promise<RecipePreview[]> => {
  const response = await api.get('/recipes/popular');
  return response.data;
};

export const getFeaturedRecipes = async (): Promise<RecipePreview[]> => {
  const response = await api.get('/recipes/featured');
  return response.data;
};

export const getAllRecipes = async (): Promise<RecipePreview[]> => {
  const response = await api.get('/recipes');
  return response.data;
};

export const getRecipeBySlug = async (slug: string): Promise<Recipe> => {
  const response = await api.get(`/recipes/slug/${slug}`);
  return response.data;
};