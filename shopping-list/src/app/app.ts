import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ShoppingListComponent } from './shopping-list/shopping-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ShoppingListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'shopping-list';
}