import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicatorService {
  selectedState = new Subject<any>();

  updateState(state): void {
    this.selectedState.next(state);
  }

  getState(): Observable<any> {
    return this.selectedState.asObservable();
  }
  constructor() {}
}
