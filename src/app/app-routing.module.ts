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
        // Angular 7
        loadChildren: "./heroes/heroes.module#HeroesModule"
      },
      {
        path: "villains",
        loadChildren: () =>
          // Angular 8
          import("./villains/villains.module").then(m => m.VillainsModule)
      },
      { path: "**", redirectTo: "" }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
