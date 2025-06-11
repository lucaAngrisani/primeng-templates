import { Component, input } from '@angular/core';
import { Avatar } from 'primeng/avatar';

@Component({
  templateUrl: './wrap-avatar.component.html',
  selector: 'wrap-avatar',
  imports: [Avatar],
})
export class WrapAvatarComponent {
  icon = input<string | null>('pi pi-user');
  image = input<string | null>(null);
  label = input<string | null>(null);
  shape = input<string>('circle');
  size = input<string>('large');
}
