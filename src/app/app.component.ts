import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marquer AppComponent comme autonome
  imports: [HeaderComponent, ContentComponent, MenuComponent], // Importer les composants autonomes ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-deux';
}
