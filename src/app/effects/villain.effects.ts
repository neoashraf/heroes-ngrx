/*
 * NgRx version 8
 * Go to heroes to see NgRx version 7
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as villainActions from '../actions/villain.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { VillainService } from '../villains/villain.service';
import { Villain } from '../models/villain.model';

@Injectable()
export class VillainEffects {
  constructor(
    private actions$: Actions,
    private villainService: VillainService
  ) {}

  loadVillains$ = createEffect(() =>
    this.actions$.pipe(
      ofType(villainActions.loadVillains),
      tap(val => console.log('BEFORE MAP:', val)),
      mergeMap(() =>
        this.villainService.getVillains().pipe(
          map(villains =>
            villainActions.loadVillainsSuccess({
              villains
            })
          ),
          catchError(err => of(villainActions.loadVillainsFail(err)))
        )
      ),
      tap(val => console.log('AFTER MAP:', val))
    )
  );

  createVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(villainActions.createVillain),
      map((action: any) => action.payload),
      mergeMap((villain: Villain) =>
        this.villainService.addVillain(villain).pipe(
          map(newVillain => villainActions.createVillainSuccess(newVillain)),
          catchError(err => of(villainActions.createVillainFail(err)))
        )
      )
    )
  );

  // @ts-ignore
  updateVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(villainActions.updateVillain),
      // I'm using any keyword here instead of Villain because the object has an extra type property.
      map(({ type, ...villain }: any) => villain),
      mergeMap((villain: Villain) =>
        this.villainService.updateVillain(villain).pipe(
          map((villain: any) => villainActions.updateVillainSuccess(villain)),
          catchError(err => of(villainActions.updateVillainFail(err)))
        )
      )
    )
  );

  deleteVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(villainActions.deleteVillain),
      map(action => action.villain),
      mergeMap((villain: Villain) =>
        this.villainService.removeVillain(villain.id).pipe(
          map(() =>
            villainActions.deleteVillainSuccess({ villainId: villain.id })
          ),
          catchError(err => of(villainActions.deleteVillainFail(err)))
        )
      )
    )
  );
}
