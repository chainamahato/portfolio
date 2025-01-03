import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/nav-bar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DOCUMENT, NgStyle } from '@angular/common';

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
  scrollBarStyle: string = 'width: 0%'; // String to hold the dynamic width of the scrollbar

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.detectFirefox();
  }

  ngAfterViewInit() {
    // Initialize the max scroll position once the view is ready
    this.calculateMaxScroll();
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

      // Dynamically update the width of the scrollbar based on scrollPercentage
      this.scrollBarStyle = `width: ${this.scrollPercentage}%`;
    }
  }

  // Listen for window resize event and recalculate maxScroll
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateMaxScroll();  // Recalculate max scroll value on resize
  }
}
