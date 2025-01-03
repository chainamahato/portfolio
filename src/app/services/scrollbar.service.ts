import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarService {
  // The variable we want to reset
  private scrollPercentageVariableSubject = new BehaviorSubject<number>(0);
  
  // Observable to get the current value
  scrollPercentageVariable$ = this.scrollPercentageVariableSubject.asObservable();

  resetScrollPercentageVariable() {
    this.scrollPercentageVariableSubject.next(0); // Reset to an empty string or any default value
  }
}
