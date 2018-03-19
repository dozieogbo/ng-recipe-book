import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe('First Recipe', 'This is basically for test purposes', 'https://lorempixel.com/200/200/people');

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onClick() {

  }
}
