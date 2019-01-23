import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewItemFormComponent } from "./components/new-item-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItemListComponent } from "./components/item-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    RouterModule
  ],
  exports: [
    NewItemFormComponent,
    ItemListComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NewItemFormComponent, ItemListComponent]
})
export class SharedModule {}
