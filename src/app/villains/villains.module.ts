import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { VillainsComponent } from "./container/villains.component";
import { EditVillainComponent } from "./edit-villain/edit-villain.component";

@NgModule({
  declarations: [VillainsComponent, EditVillainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: VillainsComponent
      },
      {
        path: "edit-villain/:id",
        component: EditVillainComponent
      }
    ])
  ]
})
export class VillainsModule {}
