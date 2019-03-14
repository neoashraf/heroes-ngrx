import { HeroActions, HeroActionTypes } from "../actions/hero.actions";

import { Hero } from "../models/hero.model";

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
  fetching: boolean;
  error: string;
}

export const initialState: HeroState = {
  heroes: [],
  hero: {} as Hero,
  fetching: false,
  error: ""
};

export function heroReducer(
  state = initialState,
  action: HeroActions
): HeroState {
  switch (action.type) {
    case HeroActionTypes.LoadHeroes:
      return { ...state, fetching: true };
    case HeroActionTypes.LoadHeroesSuccess:
      return { ...state, heroes: action.payload, fetching: false };
    case HeroActionTypes.LoadHeroesFail:
      return { ...state, heroes: [], error: action.payload, fetching: false };
    case HeroActionTypes.CreateHero:
      return { ...state, fetching: true };
    case HeroActionTypes.CreateHeroSuccess:
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        fetching: false
      };
    case HeroActionTypes.CreateHeroFail:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case HeroActionTypes.UpdateHero:
      return { ...state, fetching: true };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.map(hero =>
          hero.id === action.payload.id ? action.payload : hero
        ),
        fetching: false
      };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroFail:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case HeroActionTypes.DeleteHero:
      return { ...state, fetching: true };
    case HeroActionTypes.DeleteHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.payload),
        fetching: false
      };
    case HeroActionTypes.DeleteHeroFail:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
}
