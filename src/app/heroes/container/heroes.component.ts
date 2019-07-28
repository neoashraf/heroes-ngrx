import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHero, State } from '../../reducers';
import { Hero } from '../../models/hero.model';
import * as heroActions from '../../actions/hero.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  editItemUrl: string = '/heroes/edit-hero/'; // shared with item-list-component.html
  list$: any;
  list: Hero[];
  newItemForm: FormGroup;
  isShowNewItemForm: boolean = false;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {
    this.formBuilderInit();
    this.store.dispatch(new heroActions.LoadHeroes());
    this.list$ = this.store.select(selectHero);
  }

  onSubmit() {
    this.store.dispatch(new heroActions.CreateHero(this.newItemForm.value));
    this.newItemForm.reset();
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  showNewItemForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  cancelForm() {
    this.isShowNewItemForm = !this.isShowNewItemForm;
  }

  removeItem(hero: Hero) {
    const isConfirmed = confirm(`Delete ${hero.firstName}`);
    if (!isConfirmed) return;

    this.store.dispatch(new heroActions.DeleteHero(hero));
  }

  private formBuilderInit(): void {
    this.newItemForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      house: [''],
      knownAs: ['']
    });
  }
}
