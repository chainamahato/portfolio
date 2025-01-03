import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollbarService } from '../../services/scrollbar.service';

@Component({
  selector: 'app-home2',
  imports: [],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class AboutComponent {
  constructor(
    private router: Router,
    private scrollbarService: ScrollbarService
  ) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.resetScroll();
    }, 100);
  }
  
  // Method to trigger the reset action
  resetScroll() {
    this.scrollbarService.resetScrollPercentageVariable();  // Reset the scroll percentage
  }

  navigateTo(): void {
    this.router.navigate(['/resume']);
  }
}
