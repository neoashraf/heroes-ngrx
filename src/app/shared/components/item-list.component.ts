import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html"
})
export class ItemListComponent {
  constructor(private router: Router) {}
  @Input() editItemUrl: string;
  @Input() list$: any;
  @Input() list: any[];

  @Output() handleRemoveItem: EventEmitter<any> = new EventEmitter<any>();

  removeItem(item: any): void {
    console.log();

    this.handleRemoveItem.emit(item);
  }

  public goToEditItem(id: string): void {
    this.router.navigateByUrl(this.editItemUrl + id);
  }
}
