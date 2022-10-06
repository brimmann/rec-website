import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'It is a test recipe bro',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85AyYyNtyzG2-FvmzYNBLh8jnNcC_cYAFNA&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Test recipe',
      'It is a test recipe different',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85AyYyNtyzG2-FvmzYNBLh8jnNcC_cYAFNA&usqp=CAU',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addRecipeIngredients(ingredients);
  }

  getSingleRecipe(index: number) {
    return this.recipes[index];
  }
}
