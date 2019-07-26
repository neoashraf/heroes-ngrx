/*
 * NgRx version 8
 * Go to heroes to see NgRx version 7
 */
import { createAction, props } from "@ngrx/store";
import { Villain } from "../models/villain.model";

export const loadVillains = createAction("[Villain] loadVillains");

export const loadVillainsSuccess = createAction(
  "[Villain] loadVillainsSuccess",
  props<{ villains: Villain[] }>()
);

export const loadVillainsFail = createAction(
  "[Villain] loadVillainsFail",
  props<{ villains: []; error: any }>()
);

export const createVillain = createAction(
  "[Villain] createVillain",
  props<{ villain: Villain }>()
);

export const createVillainSuccess = createAction(
  "[Villain] createVillainSuccess",
  props<{ villain: Villain }>()
);

export const createVillainFail = createAction(
  "[Villain] createVillainFail",
  props<{ error: any }>()
);

export const updateVillain = createAction(
  "[Villain] updateVillain",
  props<{ villain: any }>()
);

export const updateVillainSuccess = createAction(
  "[Villain] updateVillainSuccess",
  props<{ villain: Villain }>()
);

export const updateVillainFail = createAction(
  "[Villain] updateVillainFail",
  props<{ error: any }>()
);

export const deleteVillain = createAction(
  "[Villain] deleteVillain",
  props<{ villain: Villain }>()
);

export const deleteVillainSuccess = createAction(
  "[Villain] deleteVillainSuccess",
  props<{ villainId: string }>()
);

export const deleteVillainFail = createAction(
  "[Villain] deleteVillainFail",
  props<{ error: any }>()
);
