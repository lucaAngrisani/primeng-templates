import { AvatarGroup } from 'primeng/avatargroup';
import { Component, input } from '@angular/core';

@Component({
  templateUrl: './wrap-avatar-group.component.html',
  selector: 'wrap-avatar-group',
  imports: [AvatarGroup],
})
export class WrapAvatarGroupComponent {
  styleClass = input<string | null>(null);
}
