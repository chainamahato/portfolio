import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response?.resume;
        console.log('data', this.data);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }

  downloadCV() {
    this.resumeDownloading = true;

    setTimeout(() => {
      this.resumeDownloading = false;
    }, 5000);

    const pdfUrl = '/assets/files/resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'resume.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

}
