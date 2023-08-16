import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[nz-card-grid]',
  exportAs: 'nzCardGrid',
  host: {
    class: 'ant-card-grid',
    '[class.ant-card-hoverable]': 'nzHoverable'
  }
})
export class NzCardGridDirective {
  static ngAcceptInputType_nzHoverable: any;
  
  @Input() nzHoverable = true;
  
  constructor() {}
}