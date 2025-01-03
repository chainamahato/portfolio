import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home1',
  imports: [ NgFor ],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.scss'
})
export class Home1Component {
  title = 'anil-portolio';

  @ViewChild('footer') footer: any;
  @ViewChild('whatIDO') whatIDO: any;

  footerTabsStart = [ 'Home', 'Portfolio', 'Services', 'Contact', 'Blogs' ];
  footerTabsEnd = [ 'Privacy Policy', 'Terms and conditions', 'Cookies Policy', 'Careers' ];
  contacts = [
    {
      header: 'Sikar',
      address: 'Harizan mohalla kasli, 332002',
      phone: '+916568545655',
      email: 'john@gmail.com'
    },
    {
      header: 'Sikar',
      address: 'Harizan mohalla kasli, 332002',
      phone: '+916568545655',
      email: 'john@gmail.com'
    },
  ];

  scrollToFooter() {
    // Scroll the footer into view smoothly
    this.whatIDO.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
