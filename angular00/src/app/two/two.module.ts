import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';

import { StateService } from './../state.service'


@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule {
  constructor(stateservice: StateService) {

  }
}
