import { Action } from "@ngrx/store";
import { Villain } from "../models/villain.model";

export enum VillainActionTypes {
  LoadVillains = "[Villain] Load Villains",
  LoadVillainsSuccess = "[Villain] Load Villains Success",
  LoadVillainsFail = "[Villain] Load Villains Fail",

  CreateVillain = "[Villain] Create Villain",
  CreateVillainSuccess = "[Villain] Create Villain Success",
  CreateVillainFail = "[Villain] Create Villain Fail",

  UpdateVillain = "[Villain] Update Villain",
  UpdateVillainSuccess = "[Villain] Update Villain Success",
  UpdateVillainFail = "[Villain] Update Villain Fail",

  DeleteVillain = "[Villain] Delete Villain",
  DeleteVillainSuccess = "[Villain] Delete Villain Success",
  DeleteVillainFail = "[Villain] Delete Villain Fail"
}

export class LoadVillains implements Action {
  readonly type = VillainActionTypes.LoadVillains;
}

export class LoadVillainsSuccess implements Action {
  readonly type = VillainActionTypes.LoadVillainsSuccess;
  constructor(public payload: Villain[]) {}
}

export class LoadVillainsFail implements Action {
  readonly type = VillainActionTypes.LoadVillainsFail;
  constructor(public payload: any) {}
}

export class CreateVillain implements Action {
  readonly type = VillainActionTypes.CreateVillain;
  constructor(public payload: Villain) {}
}

export class CreateVillainSuccess implements Action {
  readonly type = VillainActionTypes.CreateVillainSuccess;
  constructor(public payload: Villain) {}
}

export class CreateVillainFail implements Action {
  readonly type = VillainActionTypes.CreateVillainFail;
  constructor(public payload: any) {}
}

export class UpdateVillain implements Action {
  readonly type = VillainActionTypes.UpdateVillain;
  constructor(public payload: Villain) {}
}

export class UpdateVillainSuccess implements Action {
  readonly type = VillainActionTypes.UpdateVillainSuccess;
  constructor(public payload: Villain) {}
}

export class UpdateVillainFail implements Action {
  readonly type = VillainActionTypes.UpdateVillainFail;
  constructor(public payload: any) {}
}

export class DeleteVillain implements Action {
  readonly type = VillainActionTypes.DeleteVillain;
  constructor(public payload: Villain) {}
}

export class DeleteVillainSuccess implements Action {
  readonly type = VillainActionTypes.DeleteVillainSuccess;
  constructor(public payload: string) {}
}

export class DeleteVillainFail implements Action {
  readonly type = VillainActionTypes.DeleteVillainFail;
  constructor(public payload: any) {}
}

export type VillainActions =
  | LoadVillains
  | LoadVillainsSuccess
  | LoadVillainsFail
  | CreateVillain
  | CreateVillainSuccess
  | CreateVillainFail
  | UpdateVillain
  | UpdateVillainSuccess
  | UpdateVillainFail
  | DeleteVillain
  | DeleteVillainSuccess
  | DeleteVillainFail;
