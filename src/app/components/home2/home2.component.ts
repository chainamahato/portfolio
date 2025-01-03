import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollbarService } from '../../services/scrollbar.service';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home2',
  imports: [NgIf],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class AboutComponent {
  data: any;
  constructor(
    private router: Router,
    private scrollbarService: ScrollbarService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        if(response){
          this.data = response?.about;
          
          setTimeout(() => {
            this.resetScroll();
          }, 500);
        }
      },
      error: (error) => {}
    });
  }

  ngAfterViewInit() {
    this.resetScroll();
  }
  
  // Method to trigger the reset action
  resetScroll() {
    this.scrollbarService.resetScrollPercentageVariable();  // Reset the scroll percentage
  }

  navigateTo(): void {
    this.router.navigate(['/resume']);
  }
}
