import { Component, input, InputSignal } from '@angular/core';
import { Divider } from 'primeng/divider';

@Component({
  templateUrl: './wrap-divider.component.html',
  selector: 'wrap-divider',
  imports: [Divider],
})
export class WrapDividerComponent {
  styleClass: InputSignal<string | undefined> = input<string | undefined>(
    undefined
  );
  layout: InputSignal<'vertical' | 'horizontal'> = input<
    'vertical' | 'horizontal'
  >('horizontal');
  type: InputSignal<'solid' | 'dashed' | 'dotted'> = input<
    'solid' | 'dashed' | 'dotted'
  >('solid');
  align: InputSignal<'right' | 'left' | 'top' | 'bottom' | 'center'> = input<
    'right' | 'left' | 'top' | 'bottom' | 'center'
  >('center');
}
