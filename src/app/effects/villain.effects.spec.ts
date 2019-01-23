import { TestBed, inject } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";

import { VillainEffects } from "./villain.effects";

describe("VillainEffects", () => {
  let actions$: Observable<any>;
  let effects: VillainEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillainEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(VillainEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
