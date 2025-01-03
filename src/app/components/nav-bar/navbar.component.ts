import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openHamburgerMenu(): void {
    const dialogRef = this.dialog.open(HamburgerMenuComponent, {
      panelClass: 'fullscreen-dialog'  // Optional: add a custom class for further styling
    });
  }
  
}
