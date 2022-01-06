import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavHeightService {
  private isExpanded = new BehaviorSubject<boolean>(true);
  cast = this.isExpanded.asObservable();

  constructor() {}

  public updateHeight(newE: boolean) {
    console.log(newE);
    this.isExpanded.next(newE);
  }

}
