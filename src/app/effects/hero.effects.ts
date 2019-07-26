/*
 * NgRx version 7
 * Go to villains to see NgRx version 8
 */
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { HeroService } from "../heroes/hero.service";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as heroActions from "../actions/hero.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Hero } from "../models/hero.model";

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  @Effect()
  loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.LoadHeroes),
    tap(val => console.log("BEFORE MAP:", val)),
    mergeMap(() =>
      this.heroService.getHeroes().pipe(
        map(heroes => new heroActions.LoadHeroesSuccess(heroes)),
        catchError(err => of(new heroActions.LoadHeroesFail(err)))
      )
    ),
    tap(val => console.log("AFTER MAP:", val))
  );

  @Effect()
  createHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.CreateHero),
    map((action: heroActions.CreateHero) => action.payload),
    mergeMap((hero: Hero) =>
      this.heroService.addHero(hero).pipe(
        map(newHero => new heroActions.CreateHeroSuccess(newHero)),
        catchError(err => of(new heroActions.CreateHeroFail(err)))
      )
    )
  );

  @Effect()
  updateHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.UpdateHero),
    map((action: heroActions.UpdateHero) => action.payload),
    mergeMap((hero: Hero) =>
      this.heroService.updateHero(hero).pipe(
        map(updatedHero => new heroActions.UpdateHeroSuccess(updatedHero)),
        catchError(err => of(new heroActions.UpdateHeroFail(err)))
      )
    )
  );

  @Effect()
  deleteHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.DeleteHero),
    map((action: heroActions.DeleteHero) => action.payload),
    mergeMap((hero: Hero) =>
      this.heroService.removeHero(hero.id).pipe(
        map(() => new heroActions.DeleteHeroSuccess(hero.id)),
        catchError(err => of(new heroActions.DeleteHeroFail(err)))
      )
    )
  );
}
