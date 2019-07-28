/*
 * NgRx version 7
 * Go to villains to see NgRx version 8
 */
import { HeroActions, HeroActionTypes } from '../actions/hero.actions';
import { Hero } from '../models/hero.model';

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
  requesting: boolean;
  error: string;
}

export const initialState: HeroState = {
  heroes: [],
  hero: {} as Hero,
  requesting: false,
  error: ''
};

export function heroReducer(
  state = initialState,
  action: HeroActions
): HeroState {
  switch (action.type) {
    case HeroActionTypes.LoadHeroes:
      return { ...state, requesting: true };
    case HeroActionTypes.LoadHeroesSuccess:
      return { ...state, heroes: action.payload, requesting: false };
    case HeroActionTypes.LoadHeroesFail:
      return { ...state, heroes: [], error: action.payload, requesting: false };
    case HeroActionTypes.CreateHero:
      return { ...state, requesting: true };
    case HeroActionTypes.CreateHeroSuccess:
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        requesting: false
      };
    case HeroActionTypes.CreateHeroFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    case HeroActionTypes.UpdateHero:
      return { ...state, requesting: true };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.map(hero =>
          hero.id === action.payload.id ? action.payload : hero
        ),
        requesting: false
      };
    // Not applicable on this app because this is a separate page
    case HeroActionTypes.UpdateHeroFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };

    case HeroActionTypes.DeleteHero:
      return { ...state, requesting: true };
    case HeroActionTypes.DeleteHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.payload),
        requesting: false
      };
    case HeroActionTypes.DeleteHeroFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    default:
      return state;
  }
}
