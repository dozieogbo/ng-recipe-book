import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is basically for test purposes', 'https://lorempixel.com/200/200/people')
  ];

  @Output() clicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick (recipe: Recipe) {
    this.clicked.emit(recipe);
  }
}
