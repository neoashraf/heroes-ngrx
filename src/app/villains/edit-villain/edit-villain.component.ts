import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { updateVillain } from "../../actions/villain.actions";
import { State } from "../../reducers";
import { Subscription } from "rxjs";
import { VillainService } from "../villain.service";
import { Villain } from "../../models/villain.model";

@Component({
  selector: "app-edit-villain",
  templateUrl: "./edit-villain.component.html",
  styleUrls: ["./edit-villain.component.css"]
})
export class EditVillainComponent implements OnInit, OnDestroy {
  villain: Villain;
  villainForm: FormGroup;
  id: string;
  sub: Subscription;
  isSuccess: boolean;

  constructor(
    private store: Store<State>,
    private villainService: VillainService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.villain = {} as Villain;
  }

  ngOnInit(): void {
    this.getVillain();
    this.formBuilderInit();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(): void {
    this.villainForm.value.id = this.id;
    this.putVillain();
    this.isSuccess = true;
  }

  back(): void {
    this.location.back();
  }

  private getVillain(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.sub = this.villainService
      .getVillain(this.id)
      .subscribe(data => this.villainForm.patchValue(data));
  }

  private putVillain(): void {
    this.store.dispatch(updateVillain(this.villainForm.value));
  }

  private formBuilderInit(): void {
    this.villainForm = this.fb.group({
      id: [""],
      firstName: [""],
      lastName: [""],
      house: [""],
      knownAs: [""]
    });
  }
}
