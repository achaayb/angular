import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class StateService {

  reusableComponentState: any;

  
  constructor() {
    this.reusableComponentState = new BehaviorSubject<boolean>(true);
  }
}
