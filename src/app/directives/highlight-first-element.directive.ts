import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appHighlightFirstElement]'
})
export class HighlightFirstElementDirective {
  @Input() appHighlightFirstElement:boolean = false
  constructor(private elementRef: ElementRef) {
   }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.backgroundColor =this.appHighlightFirstElement ? '#c7e1c7' :'#e1a0a0'
  }

}
