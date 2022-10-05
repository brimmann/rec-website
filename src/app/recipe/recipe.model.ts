import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public desc: string;
  public imagePath: string;
  public ingredietns: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredietns = ingredients;
  }
}
