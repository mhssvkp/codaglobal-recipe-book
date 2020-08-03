import { Component, OnInit } from "@angular/core";
import LocalStorageService from "src/app/services/localstorage-service";
import { Recipe } from "src/app/models/recipe";
import { SearchService } from "src/app/services/search-service/search.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  recipes: Array<Recipe> = new Array();
  filteredRecipes: Array<Recipe> = new Array();
  constructor(
    private localStorageService: LocalStorageService,
    private searchService: SearchService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get(environment.recepeDetailsUrl)
      .subscribe((response: Array<Recipe>) => {
        this.filteredRecipes = this.recipes = response;
        this.localStorageService.storeRecipes(this.recipes);
      });
    this.searchService.searchTerm.subscribe((val) => {
      if (val) {
        this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.name.includes(val)
        );
      } else this.filteredRecipes = this.recipes;
    });
  }
}
