import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EditVillainComponent } from "./edit-villain/edit-villain.component";
import { VillainsComponent } from "./container/villains.component";
import { VillainService } from "./villain.service";
import { SharedModule } from "../shared/shared.module";

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
  ],
  providers: [VillainService]
})
export class VillainsModule {}
