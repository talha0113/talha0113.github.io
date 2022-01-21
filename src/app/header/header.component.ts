import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public menuExpanded = false;

  constructor(private renderer: Renderer2) { }

  public menuClick(): void {
    this.menuExpanded = !this.menuExpanded;
    if (this.menuExpanded) {
      this.renderer.addClass(document.body.parentElement, 'nav-open');
    }
    else {
      this.renderer.removeClass(document.body.parentElement, 'nav-open');
    }
    
  }
}
