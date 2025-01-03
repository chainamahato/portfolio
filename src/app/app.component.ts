import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/nav-bar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DOCUMENT, NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';
import { ScrollbarService } from './services/scrollbar.service';

@Component({
  selector: 'app-root',
  imports: [NgStyle, LayoutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('appLayout') appLayoutRef: ElementRef | undefined;
  maxScroll: number = 0; // Variable to store max scroll value
  scrollPercentage: number = 0; // Variable to store scroll percentage
  private scrollSubscription: Subscription;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private scrollbarService: ScrollbarService
  ) {
    this.detectFirefox();
  }

  ngAfterViewInit() {
    // Initialize the max scroll position once the view is ready
    // Subscribe to the scroll percentage changes
    this.scrollSubscription = this.scrollbarService.scrollPercentageVariable$.subscribe(value => {
      this.scrollPercentage = value;
      this.calculateMaxScroll();
    });
  }
  
  private detectFirefox() {
    // Detect if the browser is Firefox by checking the user agent
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      // Add a class to the <html> element if it's Firefox
      this.renderer.addClass(this.document.documentElement, 'firefox');
    }
  }

  // Method to calculate the max scroll value
  calculateMaxScroll() {
    const appLayoutElement = this.appLayoutRef?.nativeElement;
    if (appLayoutElement) {
      // Calculate max scroll (scrollHeight - clientHeight)
      this.maxScroll = appLayoutElement.scrollHeight - appLayoutElement.clientHeight;
    }
  }

  // Listen for scroll events to track scroll position dynamically
  onScroll() {
    const appLayoutElement = this.appLayoutRef?.nativeElement;
    if (appLayoutElement) {
      const currentScroll = appLayoutElement.scrollTop;

      // Allow scroll percentage to reach 100% if the scroll is within a small margin (e.g., 2px)
      if (Math.abs(currentScroll - this.maxScroll) <= 2) {
        this.scrollPercentage = 100;
      } else {
        // Calculate the scroll percentage normally and round to the nearest whole number
        this.scrollPercentage = Math.round((currentScroll / this.maxScroll) * 100);
      }
    }
  }

  // Listen for window resize event and recalculate maxScroll
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateMaxScroll();  // Recalculate max scroll value on resize
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
