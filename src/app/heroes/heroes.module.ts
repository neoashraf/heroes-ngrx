import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './container/heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesComponent, EditHeroComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent
      },
      {
        path: 'edit-hero/:id',
        component: EditHeroComponent
      }
    ])
  ],
  providers: []
})
export class HeroesModule {}
