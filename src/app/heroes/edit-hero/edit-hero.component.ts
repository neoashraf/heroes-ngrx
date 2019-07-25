import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../models/hero.model";
import { Store } from "@ngrx/store";
import { State } from "../../reducers";
import { HeroService } from "../hero.service";
import { Subscription } from "rxjs";
import * as heroActions from "../../actions/hero.actions";

@Component({
  selector: "app-edit-hero",
  templateUrl: "./edit-hero.component.html",
  styleUrls: ["./edit-hero.component.css"]
})
export class EditHeroComponent implements OnInit, OnDestroy {
  hero: Hero;
  heroForm: FormGroup;
  id: string;
  sub: Subscription;
  isSuccess: boolean;

  constructor(
    private store: Store<State>,
    private heroService: HeroService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.hero = {} as Hero;
  }

  ngOnInit(): void {
    this.getHero();
    this.formBuilderInit();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.heroForm.value.id = this.id;
    this.putHero();
    this.isSuccess = true;
  }

  back() {
    this.location.back();
  }

  private getHero(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.sub = this.heroService
      .getHero(this.id)
      .subscribe(data => this.heroForm.patchValue(data));
  }

  private putHero() {
    this.store.dispatch(new heroActions.UpdateHero(this.heroForm.value));
  }

  private formBuilderInit(): void {
    this.heroForm = this.fb.group({
      id: [""],
      firstName: [""],
      lastName: [""],
      house: [""],
      knownAs: [""]
    });
  }
}
