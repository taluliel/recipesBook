import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe : Recipe;
 id: number;
  constructor(private recipeService : RecipeService, private router: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    });
    
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.route.navigate(['/shoppingList'])
  }

  onEditRecipe(){
    this.route.navigate(['../', this.id, 'edit'], {relativeTo: this.router} );
  }
}
