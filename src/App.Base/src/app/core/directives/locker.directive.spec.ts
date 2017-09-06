import { LockerService } from '../services/locker.service';
import { LockerDirective } from './locker.directive';

describe('LockerDirective', () => {
  it('should create an instance', () => {
    const directive = new LockerDirective(new LockerService());
    expect(directive).toBeTruthy();
  });
});
