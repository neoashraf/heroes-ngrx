import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  createVillain,
  deleteVillain,
  loadVillains
} from "../../actions/villain.actions";
import { selectVillain, State } from "../../reducers";

import { Villain } from "../../models/villain.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-villains",
  templateUrl: "./villains.component.html",
  styleUrls: ["./villains.component.css"]
})
export class VillainsComponent implements OnInit {
  editItemUrl: string = "/villains/edit-villain/";
  list$?: any;
  list?: Villain[];
  newItemForm: FormGroup;
  isShowNewItemForm: boolean = false;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {
    this.formBuilderInit();
    this.store.dispatch(loadVillains());
    this.store
      .select(selectVillain)
      .pipe(catchError(err => throwError(err)))
      .subscribe(data => (this.list = data));
  }

  onSubmit() {
    this.store.dispatch(createVillain(this.newItemForm.value));
    this.newItemForm.reset();
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }
  cancelForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }
  showNewItemForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }
  removeItem(villain: Villain) {
    const isConfirmed = confirm(`Delete ${villain.firstName}`);
    if (!isConfirmed) return;

    this.store.dispatch(deleteVillain({ villain }));
  }

  private formBuilderInit(): void {
    this.newItemForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      house: [""],
      knownAs: [""]
    });
  }
}
