import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private footballersSubject = new BehaviorSubject([
    { name: "Messi", club: "Barcelona" },
    { name: "Ronaldo", club: "Juventus" },
    { name: "Neymar", club: "PSG" },
  ]);
  footballers$ = this.footballersSubject.asObservable();

  private selectedFootballerSubject = new BehaviorSubject<{ name: string, club: string } | null>(null);
  selectedFootballer$ = this.selectedFootballerSubject.asObservable();

  selectFootballer(footballer: { name: string; club: string }) {
    this.selectedFootballerSubject.next(footballer);
  }
}
