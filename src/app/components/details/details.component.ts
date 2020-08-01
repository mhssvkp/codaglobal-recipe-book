import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import LocalStorageService from "src/app/services/localstorage-service";
import { Recipe } from "src/app/models/recipe";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  isPopup: boolean = false;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.recipe) {
      this.activatedRoute.params.subscribe((val) => {
        let id = val.id;
        console.log(this.localStorageService.fetchRecipes());
        this.recipe = this.localStorageService
          .fetchRecipes()
          .filter((recipe) => parseInt(recipe.id) === parseInt(id))[0];
      });
    } else this.isPopup = true;
  }

  goBack() {
    if (this.isPopup) {
      this.closePopup.emit(false);
    } else {
      this.router.navigate(["home"]);
    }
  }
}
