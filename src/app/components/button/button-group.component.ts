/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export type NzButtonGroupSize = 'large' | 'default' | 'small';

@Component({
  selector: 'nz-button-group',
  exportAs: 'nzButtonGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ant-btn-group',
    '[class.ant-btn-group-lg]': `nzSize === 'large'`,
    '[class.ant-btn-group-sm]': `nzSize === 'small'`,
    '[class.ant-btn-group-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  template: ` <ng-content></ng-content> `
})
export class NzButtonGroupComponent implements OnDestroy, OnInit {
  @Input() nzSize: NzButtonGroupSize = 'default';

  dir: Direction = 'ltr';

  private destroy$ = new Subject<void>();

  constructor(@Optional() private directionality: Directionality, private viewContainerRef: ViewContainerRef) {}
  ngOnInit(): void {
    this.dir = this.directionality.value as Direction;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}