import { Directive, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { LockerService } from '../services/locker.service';


class LockerChanges implements SimpleChanges {
  [propName: string]: SimpleChange;

  lockerInput: SimpleChange;
}

@Directive({
  selector: '[locker]'
})
export class LockerDirective implements OnChanges {

  @Input('locker') lockerInput: boolean;

  constructor(private locker: LockerService) { }

  ngOnChanges(changes: LockerChanges) {
    if (changes.lockerInput.currentValue === true) {
      this.locker.Lock();
      // lock element
    }
    else {
      this.locker.Unlock();
      // unlock element
    }
  }
}
