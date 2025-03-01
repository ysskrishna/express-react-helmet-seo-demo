import express, { Request, Response, Router } from 'express';
import { RecipeService } from './recipeService';

const router: Router = express.Router();

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

// 5. Get recipe by slug
router.get('/slug/:slug', async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;
    const recipe = await RecipeService.getRecipeBySlug(slug);
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
