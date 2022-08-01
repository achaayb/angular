import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service'

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent implements OnInit {

  checkBoxState: boolean
  stateservice: StateService

  constructor(srv: StateService) {
    this.stateservice = srv
    this.checkBoxState = true
  }

  checkBoxChanged() : boolean {
    this.checkBoxState = !this.checkBoxState
    this.stateservice.reusableComponentState.next(this.checkBoxState)
    
    return true;
  }

  ngOnInit(): void {
  }

}
