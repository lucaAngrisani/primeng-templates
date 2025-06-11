import { Component, input } from '@angular/core';
import { Badge } from 'primeng/badge';

@Component({
  templateUrl: './wrap-badge.component.html',
  selector: 'wrap-badge',
  imports: [Badge],
})
export class WrapBadgeComponent {
  value = input<string | null>(null);
}
