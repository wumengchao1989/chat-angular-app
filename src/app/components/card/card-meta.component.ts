import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'nz-card-meta',
  exportAs: 'nzCardMeta',
  template: `
    <div class="ant-card-meta-avatar" *ngIf="nzAvatar">
      <ng-container [ngTemplateOutlet]="nzAvatar"></ng-container>
    </div>
    <div class="ant-card-meta-detail" *ngIf="nzTitle || nzDescription">
      <div class="ant-card-meta-title" *ngIf="nzTitle">
        <ng-container *ngTemplateOutlet="nzTitle"></ng-container>
      </div>
      <div class="ant-card-meta-description" *ngIf="nzDescription">
        <ng-container *ngTemplateOutlet="nzDescription"></ng-container>
      </div>
    </div>
  `,
  host: { class: 'ant-card-meta' },
})
export class NzCardMetaComponent {
  @Input() nzTitle: string | TemplateRef<void> | null = null;
  @Input() nzDescription: string | TemplateRef<void> | null = null;
  @Input() nzAvatar: TemplateRef<void> | null = null;

  constructor() {}
}
