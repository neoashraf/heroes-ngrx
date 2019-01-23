import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "heroes",
        pathMatch: "full"
      },
      {
        path: "heroes",
        loadChildren: "./heroes/heroes.module#HeroesModule"
      },
      {
        path: "villains",
        loadChildren: "./villains/villains.module#VillainsModule"
      },
      { path: "**", redirectTo: "" }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
