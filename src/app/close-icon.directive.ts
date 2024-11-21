import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';

@Directive({
  selector: '[appCloseIcon]',
  standalone: true
})
export class CloseIconDirective {

  @Input() iconStyles: { [key : string]: string } = {};
  private iconElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("helllo")
    addIcons({closeCircle});
  }

  @HostListener('keyup', ['$event.target.value']) onKeyup(value: string): void {
    const nativeInput = document.querySelector('input');
    if (value && value.length > 0) {
      if (!this.iconElement) {
        this.iconElement = this.renderer.createElement('ion-icon');
        this.renderer.setAttribute(this.iconElement, 'name', 'close-circle');
        this.renderer.setAttribute(this.iconElement, 'slot', 'end');
        this.renderer.setAttribute(this.iconElement, 'class', 'close-icon');
        const parent = nativeInput?.parentElement || this.el.nativeElement.parentElement;
        if (parent) {
          this.renderer.appendChild(parent, this.iconElement);
        }
        Object.keys(this.iconStyles).forEach(style => {
          this.renderer.setStyle(this.iconElement, style, this.iconStyles[style]);
        });
        this.renderer.listen(this.iconElement, 'click', () => {
          if(nativeInput){

            nativeInput.value = '';
            nativeInput.focus();
            this.removeIcon();
          }
        });
      }
    } else {
      this.removeIcon();
    }
  }
  @HostListener('focus', ['$event.target.value']) onfocus(value: string): void {
    const nativeInput = document.querySelector('input');
    if (value && value.length > 0) {
      if (!this.iconElement) {
        this.iconElement = this.renderer.createElement('ion-icon');
        this.renderer.setAttribute(this.iconElement, 'name', 'close-circle');
        this.renderer.setAttribute(this.iconElement, 'slot', 'end');
        this.renderer.setAttribute(this.iconElement, 'class', 'close-icon');
        const parent = nativeInput?.parentElement || this.el.nativeElement.parentElement;
        if (parent) {
          this.renderer.appendChild(parent, this.iconElement);
        }
        Object.keys(this.iconStyles).forEach(style => {
          this.renderer.setStyle(this.iconElement, style, this.iconStyles[style]);
        });
        this.renderer.listen(this.iconElement, 'click', () => {
          if(nativeInput){

            nativeInput.value = '';
            nativeInput.focus();
            this.removeIcon();
          }
        });
      }
    } else {
      this.removeIcon();
    }
  }
   removeIcon(): void {
    if (this.iconElement) {
      const parent = this.iconElement.parentElement;
      if (parent) {
        // this.renderer.removeChild(parent, this.iconElement);
        this.renderer.setAttribute(this.iconElement, 'class', 'close-icon-hide');
      }
      this.iconElement = null;
    }
  }

}
