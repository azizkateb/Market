import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  menuOpen = false;

  @Output() menuToggled = new EventEmitter<boolean>();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuToggled.emit(this.menuOpen);
  }
}
