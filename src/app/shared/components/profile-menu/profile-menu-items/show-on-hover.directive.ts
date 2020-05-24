import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[showOnHover]'
})
export class ShowOnHoverDirective {

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer2
    ) { }

    @HostListener('mouseover')
    hoverOn() {
        this.renderer.addClass(this.element.nativeElement, 'show');
    }

    @HostListener('mouseleave')
    leaveOff(){
        this.renderer.removeClass(this.element.nativeElement, 'show');
    }

}