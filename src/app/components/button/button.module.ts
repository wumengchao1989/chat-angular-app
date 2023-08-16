import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidiModule } from '@angular/cdk/bidi';

import { NzButtonComponent } from './button.component';
import { NzButtonGroupComponent } from './button-group.component';

@NgModule({
  declarations: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent],
  imports: [CommonModule, BidiModule],
})
export class NzButtonModule {}