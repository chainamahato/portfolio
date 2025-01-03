import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {

  constructor(public dialogRef: MatDialogRef<HamburgerMenuComponent>) {}

  // Method to close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }
}
