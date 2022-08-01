import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  checkBoxStateOne: boolean;

  constructor(srv: StateService) {
    this.checkBoxStateOne = true;
    srv.reusableComponentState.subscribe((bool: boolean): void => { this.checkBoxStateOne = bool; })
  }

  ngOnInit(): void {
  }

}
