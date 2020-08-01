import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/models/recipe";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() recipe: Recipe;
  showButtons: boolean = false;
  quickView: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  overCard() {
    this.showButtons = true;
  }

  awayFromCard() {
    this.showButtons = false;
  }

  detailsPage() {
    this.router.navigate(["recipe", this.recipe.id]);
  }

  popUpDetails() {
    this.quickView = true;
  }
  closePopup(val) {
    this.quickView = val;
  }
}
