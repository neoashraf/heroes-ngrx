import { Villain } from "../models/villain.model";
import { VillainActions, VillainActionTypes } from "../actions/villain.actions";

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

export function villainReducer(
  state = initialState,
  action: VillainActions
): VillainState {
  switch (action.type) {
    case VillainActionTypes.LoadVillains:
      return { ...state, requesting: true };
    case VillainActionTypes.LoadVillainsSuccess:
      return { ...state, villains: action.payload, requesting: false };
    case VillainActionTypes.LoadVillainsFail:
      return {
        ...state,
        villains: [],
        error: action.payload,
        requesting: false
      };
    case VillainActionTypes.CreateVillain:
      return { ...state, requesting: true };
    case VillainActionTypes.CreateVillainSuccess:
      return {
        ...state,
        villains: [...state.villains, action.payload],
        requesting: false
      };
    case VillainActionTypes.CreateVillainFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    case VillainActionTypes.UpdateVillain:
      return { ...state, requesting: true };
    // Not applicable on this app because this is a separate page
    case VillainActionTypes.UpdateVillainSuccess:
      return {
        ...state,
        villains: state.villains.map(villain =>
          villain.id === action.payload.id ? action.payload : villain
        ),
        requesting: false
      };
    // Not applicable on this app because this is a separate page
    case VillainActionTypes.UpdateVillainFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    case VillainActionTypes.DeleteVillain:
      return { ...state, requesting: true };
    case VillainActionTypes.DeleteVillainSuccess:
      return {
        ...state,
        villains: state.villains.filter(
          villain => villain.id !== action.payload
        ),
        requesting: false
      };
    case VillainActionTypes.DeleteVillainFail:
      return {
        ...state,
        villains: [],
        error: action.payload,
        requesting: false
      };
    default:
      return state;
  }
}
