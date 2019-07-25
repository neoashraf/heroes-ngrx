import { NgModule } from "@angular/core";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderNavComponent } from "./shared/components/header-nav.component";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { HeroService } from "./heroes/hero.service";
import { VillainService } from "./villains/villain.service";
import { HeroEffects } from "./effects/hero.effects";
import { VillainEffects } from "./effects/villain.effects";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, HeaderNavComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot([HeroEffects, VillainEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HeroService, VillainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
