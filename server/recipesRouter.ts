import express, { Request, Response, Router } from 'express';
import { JSONFilePreset  } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const router: Router = express.Router();

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define interfaces
interface Recipe {
  recipe_id: number;
  title: string;
  slug: string;
  image: string;
  prep_time: string;
  cook_time: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  view_count: number;
  created_at: string;
  updated_at: string;
}

interface RecipePreview {
  recipe_id: number;
  title: string;
  slug: string;
  image: string;
  prep_time: string;
  cook_time: string;
  rating: number;
}

interface Database {
  recipes: Recipe[];
}

// Setup database
const filePath = path.join(__dirname, 'db.json');
const db = await JSONFilePreset<Database>(filePath, { recipes: [] });

// Recipe service
class RecipeService {
  static async init() {
    await db.read();
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
    console.log("db.data", db.data)
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

// 1. Get all recipes previews
router.get('', async (req: Request, res: Response) => {
  try {
    const recipes = await RecipeService.getAllPreviews();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe previews' });
  }
});

// 2. Get popular recipes previews
router.get('/popular', async (req: Request, res: Response) => {
  try {
    const recipes = await RecipeService.getPopularPreviews();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching popular recipes' });
  }
});

// 3. Get featured recipes previews
router.get('/featured', async (req: Request, res: Response) => {
  try {
    const recipes = await RecipeService.getFeaturedPreviews();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured recipes' });
  }
});

// 4. Get recipe by id
router.get('/:recipe_id', async (req: Request, res: Response) => {
  try {
    const recipe_id = parseInt(req.params.recipe_id);
    const recipe = await RecipeService.getRecipeById(recipe_id);
    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }
    
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe' });
  }
});

export default router;
