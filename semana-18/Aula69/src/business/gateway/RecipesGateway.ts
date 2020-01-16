import { Recipes } from './../entities/Recipes'

export interface RecipesGateway{

    insertRecipe(recipe: Recipes): Promise<void>

}