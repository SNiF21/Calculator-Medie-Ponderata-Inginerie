import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './appShell.html',
  styleUrls: ['./appShell.css'],
})
export class AppShell {
  protected readonly title = signal('Calculator Medie Ponderata Inginerie');
}
