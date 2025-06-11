import { Component, input } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
  templateUrl: './wrap-tag.component.html',
  selector: 'wrap-tag',
  imports: [Tag],
})
export class WrapTagComponent {
  severity = input<
    | 'secondary'
    | 'contrast'
    | 'success'
    | 'primary'
    | 'danger'
    | 'info'
    | 'warn'
    | 'help'
    | null
  >(null);
  icon = input<string | null>(null);
  rounded = input<boolean>(false);
  value= input<string>('');
}
