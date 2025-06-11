import { Component, ViewChild, input } from '@angular/core';
import { TooltipModule, Tooltip } from 'primeng/tooltip';

@Component({
  templateUrl: './wrap-tooltip.component.html',
  selector: 'wrap-tooltip',
  imports: [TooltipModule],
})
export class WrapTooltipComponent {
  tooltipPosition = input<'bottom' | 'right' | 'left' | 'top'>('top');

  tooltipEvent = input<'click' | 'focus' | 'hover'>('focus');
  @ViewChild(Tooltip) tooltip!: Tooltip;
  life = input<number>(5000);
  value = input<string>('');
}
