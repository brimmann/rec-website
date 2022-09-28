import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'It is a test recipe bro',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85AyYyNtyzG2-FvmzYNBLh8jnNcC_cYAFNA&usqp=CAU'
    ),
    new Recipe(
      'Test recipe',
      'It is a test recipe bro',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85AyYyNtyzG2-FvmzYNBLh8jnNcC_cYAFNA&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
