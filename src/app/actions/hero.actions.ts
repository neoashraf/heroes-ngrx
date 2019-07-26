/*
 * NgRx version 7
 * Go to villains to see NgRx version 8
 */
import { Action } from "@ngrx/store";
import { Hero } from "../models/hero.model";

export enum HeroActionTypes {
  LoadHeroes = "[Hero] Load Heroes",
  LoadHeroesSuccess = "[Hero] Load Heroes Success",
  LoadHeroesFail = "[Hero] Load Heroes Fail",

  CreateHero = "[Hero] Create Hero",
  CreateHeroSuccess = "[Hero] Create Hero Success",
  CreateHeroFail = "[Hero] Create Hero Fail",

  UpdateHero = "[Hero] Update Hero",
  UpdateHeroSuccess = "[Hero] Update Hero Success",
  UpdateHeroFail = "[Hero] Update Hero Fail",

  DeleteHero = "[Hero] Delete Hero",
  DeleteHeroSuccess = "[Hero] Delete Hero Success",
  DeleteHeroFail = "[Hero] Delete Hero Fail"
}

export class LoadHeroes implements Action {
  readonly type = HeroActionTypes.LoadHeroes;
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroActionTypes.LoadHeroesSuccess;
  constructor(public payload: Hero[]) {}
}

export class LoadHeroesFail implements Action {
  readonly type = HeroActionTypes.LoadHeroesFail;
  constructor(public payload: any) {}
}

export class CreateHero implements Action {
  readonly type = HeroActionTypes.CreateHero;
  constructor(public payload: Hero) {}
}

export class CreateHeroSuccess implements Action {
  readonly type = HeroActionTypes.CreateHeroSuccess;
  constructor(public payload: Hero) {}
}

export class CreateHeroFail implements Action {
  readonly type = HeroActionTypes.CreateHeroFail;
  constructor(public payload: any) {}
}

export class UpdateHero implements Action {
  readonly type = HeroActionTypes.UpdateHero;
  constructor(public payload: Hero) {}
}

export class UpdateHeroSuccess implements Action {
  readonly type = HeroActionTypes.UpdateHeroSuccess;
  constructor(public payload: Hero) {}
}

export class UpdateHeroFail implements Action {
  readonly type = HeroActionTypes.UpdateHeroFail;
  constructor(public payload: any) {}
}

export class DeleteHero implements Action {
  readonly type = HeroActionTypes.DeleteHero;
  constructor(public payload: Hero) {}
}

export class DeleteHeroSuccess implements Action {
  readonly type = HeroActionTypes.DeleteHeroSuccess;
  constructor(public payload: string) {}
}

export class DeleteHeroFail implements Action {
  readonly type = HeroActionTypes.DeleteHeroFail;
  constructor(public payload: any) {}
}

export type HeroActions =
  | LoadHeroes
  | LoadHeroesSuccess
  | LoadHeroesFail
  | CreateHero
  | CreateHeroSuccess
  | CreateHeroFail
  | UpdateHero
  | UpdateHeroSuccess
  | UpdateHeroFail
  | DeleteHero
  | DeleteHeroSuccess
  | DeleteHeroFail;
