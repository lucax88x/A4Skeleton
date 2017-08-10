import { TestBed, inject } from '@angular/core/testing';

import { LockerService } from './locker.service';
import * as NProgress from "nprogress";

describe('LockerService', () => {
  let sut: LockerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockerService]
    });
  });

  beforeEach(() => {
    spyOn(NProgress, "start").and.callThrough();
    spyOn(NProgress, "done").and.callThrough();

    sut = TestBed.get(LockerService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it("should call lock correctly first time", (() => {
    sut.Lock();

    expect(NProgress.start).toHaveBeenCalledTimes(1);
    expect(NProgress.done).not.toHaveBeenCalled();
  }));

  it("should not call lock a second time", (() => {
    sut.Lock();
    // sut.Lock();
    sut.Lock();
    sut.Lock();

    expect(NProgress.start).toHaveBeenCalledTimes(1);
    expect(NProgress.done).not.toHaveBeenCalled();
  }));

  it("should call lock if the previous lock has been unlocked", (() => {
    sut.Lock();
    sut.Unlock();
    sut.Lock();

    expect(NProgress.start).toHaveBeenCalledTimes(2);
    expect(NProgress.done).toHaveBeenCalledTimes(1);
  }));

  it("should not call unlock if there are still locks pending", (() => {
    sut.Lock();
    sut.Lock();
    sut.Unlock();

    expect(NProgress.start).toHaveBeenCalledTimes(1);
    expect(NProgress.done).not.toHaveBeenCalled();
  }));

  it("should call lock if the previous lock has been unlocked (multiple)", (() => {
    sut.Lock();
    sut.Lock();
    sut.Lock();
    sut.Lock();
    sut.Unlock();
    sut.Unlock();
    sut.Unlock();
    sut.Unlock();
    sut.Lock();

    expect(NProgress.start).toHaveBeenCalledTimes(2);
    expect(NProgress.done).toHaveBeenCalledTimes(1);
  }));
});