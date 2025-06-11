import { Component, output, input } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
  templateUrl: './wrap-chip.component.html',
  selector: 'wrap-chip',
  imports: [Chip],
})
export class WrapChipComponent {
  removeIcon = input<string | null>(null);
  styleClass = input<string>('w-full');
  removable = input<boolean>(false);
  onRemove = output<MouseEvent>();

  label = input<string>('');
}
