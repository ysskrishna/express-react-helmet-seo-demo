import { Recipe, RecipePreview } from './types';
import { db } from './dbutils';

export class RecipeService {
  private static initialized = false;

  static async init() {
    if (!this.initialized) {
      await db.read();
      this.initialized = true;
    }
  }

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
    await this.init();
    return db.data.recipes.map(this.toPreview);
  }

  static async getPopularPreviews(): Promise<RecipePreview[]> {
    await this.init();
    return db.data.recipes
      .sort((a, b) => b.view_count - a.view_count)
      .slice(0, 5)
      .map(this.toPreview);
  }

  static async getFeaturedPreviews(): Promise<RecipePreview[]> {
    await this.init();
    return db.data.recipes
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5)
      .map(this.toPreview);
  }

  static async getRecipeById(recipe_id: number): Promise<Recipe | undefined> {
    await this.init();
    const recipe = db.data.recipes.find(r => r.recipe_id === recipe_id);
    if (recipe) {
      // Increment view count
      recipe.view_count += 1;
      await db.write();
    }
    return recipe;
  }
} 