import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landingPage.html',
  styleUrls: ['./landingPage.css'],
})
export class LandingPage {}
