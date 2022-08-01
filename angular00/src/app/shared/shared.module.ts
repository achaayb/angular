import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './../reusable/reusable.component';



@NgModule({
  declarations: [ReusableComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }