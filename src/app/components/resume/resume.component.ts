import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ScrollbarService } from '../../services/scrollbar.service';

@Component({
  selector: 'app-resume',
  standalone: true, 
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  data: any;
  resumeDownloading = false;
  
  constructor(
    private dataService: DataService,
    private scrollbarService: ScrollbarService
  ) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response?.resume;
      },
      error: (error) => {}
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.resetScroll();
    }, 100);
  }

  // Method to trigger the reset action
  resetScroll() {
    this.scrollbarService.resetScrollPercentageVariable();  // Reset the scroll percentage
  }

  downloadCV() {
    this.resumeDownloading = true;

    setTimeout(() => {
      this.resumeDownloading = false;
    }, 15000);

    const pdfUrl = './assets/files/resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'ChainaMahato_CV.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

}
