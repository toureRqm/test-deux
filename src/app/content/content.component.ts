import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from '../my-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  selectedFootballer: { name: string; club: string } | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.subscription.add(this.myService.selectedFootballer$.subscribe(footballer => {
      this.selectedFootballer = footballer;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
