import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectVillain, State } from "../../reducers";

import { Villain } from "../../models/villain.model";
import * as villainActions from "../../actions/villain.actions";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-villains",
  templateUrl: "./villains.component.html",
  styleUrls: ["./villains.component.css"]
})
export class VillainsComponent implements OnInit {
  editItemUrl: string = "/villains/edit-villain/";
  list$: any;
  list: any[];
  newItemForm: FormGroup;
  isShowNewItemForm: boolean = false;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {
    this.formBuilderInit();
    this.store.dispatch(new villainActions.LoadVillains());
    this.list$ = this.store.select(selectVillain);
  }

  onSubmit() {
    this.store.dispatch(
      new villainActions.CreateVillain(this.newItemForm.value)
    );
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

    this.store.dispatch(new villainActions.DeleteVillain(villain));
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
