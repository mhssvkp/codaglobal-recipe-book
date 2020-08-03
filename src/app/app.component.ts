import { Component } from "@angular/core";
import { Recipe } from "./models/recipe";
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

  constructor(private searchService: SearchService, private router: Router) {}

  search() {
    console.log(this.searchText);
    this.searchService.searchTerm.next(this.searchText);
    this.router.navigate(["home"]);
  }
}
