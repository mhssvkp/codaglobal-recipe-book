import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor() {}

  searchTerm: Subject<string> = new Subject();
}
