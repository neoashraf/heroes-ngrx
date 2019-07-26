import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { heroReducer, HeroState } from "./hero.reducer";
import { villainReducer, VillainState } from "./villain.reducer";

export interface State {
  heroes: HeroState;
  villains: VillainState;
}

export const reducers: ActionReducerMap<State> = {
  heroes: heroReducer,
  villains: villainReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectHeroesState = (state: State) => state.heroes;
export const selectHero = createSelector(
  selectHeroesState,
  (state: HeroState) => state.heroes
);

export const selectVillainsState = (state: State) => state.villains;
export const selectVillain = createSelector(
  selectVillainsState,
  (state: VillainState) => {
    console.log("INDEX: ", state.villains);
    return state.villains;
  }
);
