import { HeroActions, HeroActionTypes } from "../actions/hero.actions";

import { Hero } from "../models/hero.model";

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
  error: string;
}

export const initialState: HeroState = {
  heroes: [],
  hero: {} as Hero,
  error: ""
};

export function heroReducer(
  state = initialState,
  action: HeroActions
): HeroState {
  switch (action.type) {
    case HeroActionTypes.LoadHeroesSuccess:
      return { ...state, heroes: action.payload };
    case HeroActionTypes.LoadHeroesFail:
      return { ...state, heroes: [], error: action.payload };
    case HeroActionTypes.CreateHeroSuccess:
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };
    case HeroActionTypes.CreateHeroFail:
      return {
        ...state,
        error: action.payload
      };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.map(hero =>
          hero.id === action.payload.id ? action.payload : hero
        )
      };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroFail:
      return {
        ...state,
        error: action.payload
      };
    case HeroActionTypes.DeleteHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.payload)
      };
    case HeroActionTypes.DeleteHeroFail:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
