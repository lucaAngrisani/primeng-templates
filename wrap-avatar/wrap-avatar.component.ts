import { Component, input } from '@angular/core';
import { Avatar } from 'primeng/avatar';

@Component({
  templateUrl: './wrap-avatar.component.html',
  selector: 'wrap-avatar',
  imports: [Avatar],
})
export class WrapAvatarComponent {
  icon = input<string | undefined>('pi pi-user');
  image = input<string | undefined>(undefined);
  label = input<string | undefined>(undefined);
  shape = input<'square' | 'circle' | undefined>('circle');
  size = input<'normal' | 'large' | 'xlarge' | undefined>('large');
}
