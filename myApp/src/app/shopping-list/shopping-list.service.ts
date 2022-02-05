import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{
    ingredientsChange= new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[]=[
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngridient(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
      }

      addIngridients(ingredients : Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
      }
}