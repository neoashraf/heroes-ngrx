import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as villainActions from "../actions/villain.actions";
import {
  catchError,
  exhaustMap,
  map,
  mapTo,
  mergeMap,
  tap
} from "rxjs/operators";
import { VillainService } from "../villains/villain.service";
import { Villain } from "../models/villain.model";

@Injectable()
export class VillainEffects {
  constructor(
    private actions$: Actions,
    private villainService: VillainService
  ) {}

  @Effect()
  loadVillains$: Observable<Action> = this.actions$.pipe(
    ofType(villainActions.VillainActionTypes.LoadVillains),
    tap(val => console.log("BEFORE MAP:", val)),
    mergeMap(() =>
      this.villainService.getVillains().pipe(
        map(villains => new villainActions.LoadVillainsSuccess(villains)),
        catchError(err => of(new villainActions.LoadVillainsFail(err)))
      )
    ),
    tap(val => console.log("AFTER MAP:", val))
  );

  @Effect()
  createVillain$: Observable<Action> = this.actions$.pipe(
    ofType(villainActions.VillainActionTypes.CreateVillain),
    map((action: villainActions.CreateVillain) => action.payload),
    mergeMap((villain: Villain) =>
      this.villainService.addVillain(villain).pipe(
        map(newVillain => new villainActions.CreateVillainSuccess(newVillain)),
        catchError(err => of(new villainActions.CreateVillainFail(err)))
      )
    )
  );

  @Effect()
  updateVillain$: Observable<Action> = this.actions$.pipe(
    ofType(villainActions.VillainActionTypes.UpdateVillain),
    map((action: villainActions.UpdateVillain) => action.payload),
    mergeMap((villain: Villain) =>
      this.villainService.updateVillain(villain).pipe(
        map(
          updatedVillain =>
            new villainActions.UpdateVillainSuccess(updatedVillain)
        ),
        catchError(err => of(new villainActions.UpdateVillainFail(err)))
      )
    )
  );

  @Effect()
  deleteVillain$: Observable<Action> = this.actions$.pipe(
    ofType(villainActions.VillainActionTypes.DeleteVillain),
    map((action: villainActions.DeleteVillain) => action.payload),
    mergeMap((villain: Villain) =>
      this.villainService.removeVillain(villain.id).pipe(
        map(() => new villainActions.DeleteVillainSuccess(villain.id)),
        catchError(err => of(new villainActions.DeleteVillainFail(err)))
      )
    )
  );
}
