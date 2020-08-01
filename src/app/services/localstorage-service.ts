import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe";

@Injectable({
  providedIn: "root",
})
export default class LocalStorageService {
  private localstorage = window.localStorage;
  private RECIPES = "recipes";
  storeRecipes(val) {
    localStorage.setItem(this.RECIPES, JSON.stringify(val));
  }
  fetchRecipes(): Array<Recipe> {
    return JSON.parse(localStorage.getItem(this.RECIPES));
  }
}
