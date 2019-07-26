/*
 * NgRx version 8
 * Go to heroes to see NgRx version 7
 */
import { createReducer, on } from "@ngrx/store";
import { Villain } from "../models/villain.model";
import * as VillainActions from "../actions/villain.actions";

export interface VillainState {
  villains: Villain[];
  villain: Villain;
  requesting: boolean;
  error: string;
}

export const initialState: VillainState = {
  villains: [],
  villain: {} as Villain,
  requesting: false,
  error: ""
};

export const villainReducer = createReducer(
  initialState,
  on(VillainActions.loadVillains, state => ({
    ...state,
    requesting: true
  })),
  on(VillainActions.loadVillainsSuccess, (state, { villains }) => ({
    ...state,
    villains
  })),
  on(VillainActions.loadVillainsFail, (state, { error }) => ({
    ...state,
    villains: [],
    error
  })),
  on(VillainActions.createVillain, state => ({
    ...state,
    requesting: true
  })),
  on(VillainActions.createVillainSuccess, state => ({
    ...state,
    villains: [...state.villains, state.villain]
  })),
  on(VillainActions.createVillainFail, (state, { error }) => ({
    ...state,
    error,
    requesting: false
  })),
  on(VillainActions.updateVillain, state => ({
    ...state,
    requesting: true
  })),
  on(VillainActions.updateVillainSuccess, (state: any) => ({
    ...state,
    villains: state.villains.map(v => (v.id === state.id ? state : v))
  })),
  on(VillainActions.updateVillainFail, (state, { error }) => ({
    ...state,
    error,
    requesting: false
  })),
  on(VillainActions.deleteVillain, state => ({
    ...state,
    requesting: true
  })),
  on(VillainActions.deleteVillainSuccess, (state, { villainId }) => ({
    ...state,
    villains: state.villains.filter(v => v.id !== villainId),
    requesting: false
  })),
  on(VillainActions.deleteVillainFail, (state, { error }) => ({
    ...state,
    error,
    requesting: false
  }))
);
