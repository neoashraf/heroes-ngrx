import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html"
})
export class HeaderNavComponent implements OnInit {
  navIsCollapse: boolean = true;
  constructor() {}
  ngOnInit() {}
}
