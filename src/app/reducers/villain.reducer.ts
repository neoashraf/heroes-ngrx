import { Villain } from "../models/villain.model";
import { VillainActions, VillainActionTypes } from "../actions/villain.actions";

export interface VillainState {
  villains: Villain[];
  villain: Villain;
  error: string;
}

export const initialState: VillainState = {
  villains: [],
  villain: {} as Villain,
  error: ""
};

export function villainReducer(
  state = initialState,
  action: VillainActions
): VillainState {
  switch (action.type) {
    case VillainActionTypes.LoadVillainsSuccess:
      return { ...state, villains: action.payload };
    case VillainActionTypes.LoadVillainsFail:
      return { ...state, villains: [], error: action.payload };
    case VillainActionTypes.CreateVillainSuccess:
      return {
        ...state,
        villains: [...state.villains, action.payload]
      };
    case VillainActionTypes.CreateVillainFail:
      return {
        ...state,
        error: action.payload
      };
    // Not applicable on this app because this is a separate page
    case VillainActionTypes.UpdateVillainSuccess:
      return {
        ...state,
        villains: state.villains.map(villain =>
          villain.id === action.payload.id ? action.payload : villain
        )
      };
    // Not applicable on this app because this is a separate page
    case VillainActionTypes.UpdateVillainFail:
      return {
        ...state,
        error: action.payload
      };
    case VillainActionTypes.DeleteVillainSuccess:
      return {
        ...state,
        villains: state.villains.filter(
          villain => villain.id !== action.payload
        )
      };
    case VillainActionTypes.DeleteVillainFail:
      return {
        ...state,
        villains: [],
        error: action.payload
      };
    default:
      return state;
  }
}
