import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'nz-card-tab',
  exportAs: 'nzCardTab',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class NzCardTabComponent {
  @ViewChild('template') template!: TemplateRef<void>;
}