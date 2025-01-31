import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
    selector: 'code[highlight]',
    standalone: false
})
export class HighlightCodeDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    hljs.highlightElement(this.elRef.nativeElement);
  }

}
