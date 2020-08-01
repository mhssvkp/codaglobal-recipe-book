import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Recipe } from "./models/recipe";
import LocalStorageService from "./services/localstorage-service";
import { SearchService } from "./services/search-service/search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "recipe-book";
  recipes: Array<Recipe> = new Array();
  searchText: string = "";

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private searchService: SearchService,
    private router: Router
  ) {
    httpClient
      .get(environment.recepeDetailsUrl)
      .subscribe((response: Array<Recipe>) => {
        this.recipes = response;
        localStorageService.storeRecipes(this.recipes);
      });
  }

  search() {
    console.log(this.searchText);

    this.searchService.searchTerm.next(this.searchText);
    this.router.navigate(["home"]);
  }
}
