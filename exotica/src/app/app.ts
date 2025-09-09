import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HeroComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exotica');
}
