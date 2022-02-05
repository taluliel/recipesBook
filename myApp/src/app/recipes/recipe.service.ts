import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>();
    private recipes: Recipe[]= [
        new Recipe('Pasta'
        ,'My Pasta',
         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
         [new Ingredients('Paste', 1),
         new Ingredients('Onion', 1),
         new Ingredients('Tomato', 5)
        ] ),
        
         new Recipe('Fish',
         'My Fish',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505' ,
          [new Ingredients('Fish', 2),
          new Ingredients('Garlic', 4),
          new Ingredients('Coriander', 2)
         ] )
    
      ];
      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
    }

      addIngredientsToShoppingList(ingredients: Ingredients[]){
        this.shoppingListService.addIngridients(ingredients);
      }
}