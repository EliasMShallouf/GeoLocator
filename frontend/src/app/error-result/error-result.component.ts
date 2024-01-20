import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-result',
  standalone: true,
  imports: [],
  templateUrl: './error-result.component.html',
  styleUrl: './error-result.component.css'
})
export class ErrorResultComponent {
  error: string = ""

  constructor(private router: Router) {
    this.error = this.router.getCurrentNavigation()?.extras?.state?['error'][0] : '';
  }
}
