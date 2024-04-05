import { Component } from '@angular/core';
import { MyService } from '../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  // Utilisation de "public" pour permettre l'accès dans le template
  constructor(public myService: MyService) { }

  selectFootballer(footballer: { name: string; club: string }) {
    this.myService.selectFootballer(footballer);
  }
}
