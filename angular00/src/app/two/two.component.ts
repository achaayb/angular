import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  checkBoxStateOne: boolean;

  constructor(srv: StateService) {
    this.checkBoxStateOne = true;
    srv.reusableComponentState.subscribe((bool: boolean): void => { this.checkBoxStateOne = bool; })
  }

  ngOnInit(): void {
  }

}
