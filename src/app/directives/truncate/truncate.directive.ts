import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var shave: any;

@Directive({
  selector: '[nxTruncate]'
})
export class TruncateDirective implements OnInit{

  private element: ElementRef;
  @Input('nxTruncate') maxHeight: string;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(){
    setTimeout(()=>{
        shave(this.element, this.maxHeight);
    },250);
  }

}
