export interface Recipe {
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

export interface RecipePreview {
    recipe_id: number;
    title: string;
    slug: string;
    image: string;
    prep_time: string;
    cook_time: string;
    rating: number;
}