import { Recipe, RecipePreview } from '../types';
import { db } from '../core/dbutils';

export class RecipeService {
  static toPreview(recipe: Recipe): RecipePreview {
    return {
      recipe_id: recipe.recipe_id,
      title: recipe.title,
      slug: recipe.slug,
      image: recipe.image,
      prep_time: recipe.prep_time,
      cook_time: recipe.cook_time,
      rating: recipe.rating
    };
  }

  static async getAllPreviews(): Promise<RecipePreview[]> {
    return db.data.recipes.map(this.toPreview);
  }

  static async getPopularPreviews(): Promise<RecipePreview[]> {
    return db.data.recipes
      .sort((a, b) => b.view_count - a.view_count)
      .slice(0, 4)
      .map(this.toPreview);
  }

  static async getFeaturedPreviews(): Promise<RecipePreview[]> {
    return db.data.recipes
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4)
      .map(this.toPreview);
  }

  static async getRecipeById(recipe_id: number): Promise<Recipe | undefined> {
    const recipe = db.data.recipes.find(r => r.recipe_id === recipe_id);
    if (recipe) {
      // Increment view count
      recipe.view_count += 1;
      await db.write();
    }
    return recipe;
  }

  static async getRecipeBySlug(slug: string): Promise<Recipe | undefined> {
    const recipe = db.data.recipes.find(r => r.slug === slug);
    if (recipe) {
      // Increment view count
      recipe.view_count += 1;
      await db.write();
    }
    return recipe;
  }
} 